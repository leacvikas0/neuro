---
name: imagen-guide
description: Prompt craft for the image generation tools (generate_image, edit_image). Load before any image generation or edit.
---

# Imagen Guide

Prompt craft for the `gpt-image-2_5` tools. Every rule here was paid for in rejected renders. Load this before any image generation or edit.

## Batch limit

Never issue more than **3 generations at a time**. Batches of three are fine; a fourth concurrent call aborts. Queue the rest and run them in the next batch.

## The model's two default failures

1. **Plastic.** Waxy surfaces, fake cinematic glow, studio sheen, HDR halo. The model hears "photorealistic" and delivers glossy CGI.
2. **Yellow.** Everything drifts amber/gold regardless of the brief. "Warm" executes as "yellow". This is why warm scenes come out looking cheap.

Fight both in every prompt, or "photoreal" reads as AI slop.

## The photoreal recipe

Canonical example — this prompt produced the most real-looking render we've gotten:

> An authentic, uncurated smartphone photo taken with an iPhone at eye level. A fictional 32-year-old man sitting across from the camera in an ordinary diner booth on an overcast afternoon. He is caught mid-sentence, looking slightly to the side with a natural, relaxed expression. He has visible skin texture, subtle undereye circles, faint stubble, and flyaway hairs. He wears an ordinary faded navy crewneck sweatshirt with natural wrinkles. On the laminate table is a half-empty diner mug with coffee rings, a paper napkin, and a set of car keys. Flat, honest indoor ambient lighting mixed with dull daylight from a nearby window. No studio lighting, no waxy skin retouching, no fake cinematic glow, raw and candid.

The moves to extract:

1. **Name the camera and the honesty level.** "authentic, uncurated smartphone photo taken with an iPhone at eye level" — specific device, "uncurated", "raw and candid". This beats "photorealistic", which the model reads as "glossy". "Shot on 35mm film" works too.
2. **State the light like a technician, including the boring parts.** "Flat, honest indoor ambient lighting mixed with dull daylight from a nearby window." Overcast and dull beat golden hour. The model adds amber if you let it.
3. **Describe imperfections explicitly.** Skin texture, undereye circles, stubble, flyaway hairs, wrinkles, coffee rings, dust, specks. Realness lives in texture; the model omits it unless asked.
4. **Kill the defaults inside the prompt.** "No studio lighting, no waxy skin retouching, no fake cinematic glow."
5. **Name colors and exclude the cast.** "True rose-pink, warm cream, deep neutral charcoal — neutral white balance, no yellow or amber cast." Never just "warm".

**The squint test:** if a still frame looks like it was retouched, lit by a studio, or graded in a LUT — it failed. Real photos look slightly boring at first glance; that boredom is the realism.

## The negative tail — append to every prompt

Photos:

> Negative :: ai slop, ai generated, overly yellow images, amber color cast, plastic looking, waxy skin, glossy retouching, fake cinematic glow, overly polished,

Art:

> Negative :: ai slop, ai generated, overly yellow images, amber color cast, plastic looking, glossy sheen, overly polished,

## When you genuinely want cinematic

Cinematic is allowed, but the word alone summons glow and teal-orange grading. Pair it: "cinematic but natural — real film grain, honest exposure, no digital glow, no HDR." Specify light as a thing in the world ("one soft diffused window light from the upper left"), never as an effect ("dramatic cinematic lighting").

## Pixel art restraint

Pixel art is welcome when it suits the brand, but restraint is the rule: ONE focal element, large calm negative space, limited palette (4–6 colors), crisp edges, subtle dithering. Never build a full street/scene/store — that reads as a game screenshot and becomes cognitively expensive. Clean modern UI type over pixel art is an intentional contrast and works. Negative for pixel: blurry, anti-aliased, smooth gradients, photorealistic, 3d render.

## Composition for UI

- Compose the calm text zone INTO the art (one quiet, empty third) — never plan to fix legibility with scrims later.
- Art is the ground; UI is a thin layer: wordmark + one short line + one button. No products, prices, badges, nav, or store info baked into hero art — the first screen must be felt, not read.
- State aspect ratio in words ("wide 16:9 landscape") and restate it every call.

## Edit protocol (multi-turn)

- One change per pass. Bundled changes silently no-op in image models — split them or change approach. Never retry louder.
- Restate locks every call: aspect ratio in words, locked constants, "keep the same framing, same palette, same type".
- "Same as before" is weak — re-state the actual content.
- If an edit returns a near-identical frame, the change was too small or bundled — make it bigger or split it.
