# SpyneJS Architectural Examples

This repository contains a set of minimal, inspectable examples used to evaluate the VBL (View, Behavior, Logic) architecture in practice.

Each example is designed to make architectural boundaries explicit:
- where durable structure lives
- where application content is expected to evolve
- how behavior is captured and synchronized
- how intent remains readable as systems grow

These examples are not tutorials. They are reference artifacts intended for inspection and experimentation.

---

## Inspect Live Examples (No Setup Required)

Each example below can be opened directly in StackBlitz for immediate inspection. No installation or configuration is required.

You can:
- read the structure
- modify code
- observe behavior
- intentionally break boundaries
- verify architectural claims made in the launch article

---

## Examples and Architectural Focus

| Example | Architectural Focus | StackBlitz |
|--------|----------------------|------------|
| **Hello World (VBL)** | Minimal View / Behavior / Logic separation | https://stackblitz.com/edit/nybatista-spynejs-examples-2ujpnsfp?file=src%2Findex.js |
| **Meme Generator** | Explicit behavior streams and synchronization | https://stackblitz.com/fork/github/nybatista/spynejs-examples/tree/example-channels?file=src%2Findex.js |
| **Nesting ViewStreams** | Hierarchical ViewStream composition | https://stackblitz.com/fork/github/nybatista/spynejs-examples/tree/example-nesting-vs?file=src%2Findex.js |
| **Single Page App** | Single-active-child pattern and lifecycle control | https://stackblitz.com/fork/github/nybatista/spynejs-examples/tree/example-sac?file=src%2Findex.js |
| **Todos App** | Coordinating multiple behaviors without coupling | https://stackblitz.com/fork/github/nybatista/spynejs-examples/tree/example-todos?file=src%2Findex.js |
| **360º View Vehicle** | Complex view coordination and 3D interaction | https://stackblitz.com/fork/github/nybatista/spynejs-examples-3d/tree/example-vespa?file=src%2Findex.js |

> **Note:** These examples correspond directly to the examples section of the SpyneJS documentation.  
> More detailed walkthroughs and explanations for each example can be found at:  
> **https://spynejs.com/docs/examples**

---

## Relating Examples to AI-Identified Concerns

When evaluated by AI models, VBL consistently surfaces questions around:
- boundary enforcement
- behavior complexity
- discipline required at scale
- separation erosion under pressure

Each example above demonstrates how those concerns are addressed structurally rather than through explanation.

For example:
- Behavior streams are encapsulated behind Channel abstractions rather than exposing reactive primitives directly.
- View logic remains mechanical and inspectable, avoiding hidden side effects.
- Application logic remains isolated and testable without requiring knowledge of rendering or synchronization.

---

## Run Locally (Optional)

If you prefer to inspect or modify the examples locally:

```bash
git clone https://github.com/nybatista/spynejs-examples
cd spynejs-examples
npm install
npm start
```

Each example lives on its own branch and can be checked out independently.

---

## Further Context

- The architectural rationale behind these examples is described in the SpyneJS launch article.
- Ongoing architectural questions and expanded context are tracked at https://spynejs.ai.

The intent is not to provide final answers, but to keep architectural reasoning explicit and inspectable over time.
