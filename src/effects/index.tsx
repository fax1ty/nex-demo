import { useThree } from "@react-three/fiber";
import { EffectComposer } from "@react-three/postprocessing";
import {
  // BlendFunction,
  // BloomEffect,
  BrightnessContrastEffect,
  EdgeDetectionMode,
  Effect,
  EffectComposer as RawEffectComposer,
  EffectPass,
  HueSaturationEffect,
  // KernelSize,
  PredicationMode,
  RenderPass,
  SMAAEffect,
  SMAAPreset,
} from "postprocessing";
import { useEffect, useLayoutEffect, useRef } from "react";
import { degToRad } from "three/src/math/MathUtils";

const updateLastComposerEffect = (effectComposer: RawEffectComposer) => {
  for (let i = 0; i < effectComposer.passes.length; i++) {
    const pass = effectComposer.passes[i];

    if (pass.name === "EffectPass") {
      pass.renderToScreen = i === effectComposer.passes.length - 1;
    }
  }
};

export const Postprocessing = () => {
  const effectComposer = useRef<RawEffectComposer>(null);
  const camera = useThree((state) => state.camera);
  const scene = useThree((state) => state.scene);

  useLayoutEffect(() => {
    if (!effectComposer.current || !effectComposer.current.passes) return;
    updateLastComposerEffect(effectComposer.current);
  });

  useEffect(() => {
    const composer = effectComposer.current;

    if (!camera || !scene || camera.name !== "pp-camera" || !composer) return;

    composer.reset();
    composer.addPass(new RenderPass(scene, camera));

    const effects: Effect[] = [];

    // effects.push(
    //   new BloomEffect({
    //     mipmapBlur: true,
    //     blendFunction: BlendFunction.SCREEN,
    //     kernelSize: KernelSize.LARGE,
    //     luminanceThreshold: 1,
    //     luminanceSmoothing: 0,
    //     intensity: 0.65,
    //   })
    // );

    effects.push(
      new HueSaturationEffect({
        hue: 0,
        saturation: degToRad(7),
      })
    );
    effects.push(
      new BrightnessContrastEffect({
        brightness: 0.2,
        contrast: -0.25,
      })
    );

    const smaaPass = new EffectPass(
      camera,
      new SMAAEffect({
        edgeDetectionMode: EdgeDetectionMode.COLOR,
        predicationMode: PredicationMode.DISABLED,
        preset: SMAAPreset.MEDIUM,
      })
    );
    composer.addPass(smaaPass);

    if (effects.length) composer.addPass(new EffectPass(camera, ...effects));

    updateLastComposerEffect(effectComposer.current);

    return () => composer.reset();
  }, [camera, scene]);

  return (
    <EffectComposer multisampling={0} ref={effectComposer}>
      {/* Обман для свойства children */}
      <></>
    </EffectComposer>
  );
};
