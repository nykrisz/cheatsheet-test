---
title: Option1 Assertions
description: Get started building your docs site with Starlight.
---

### .toBe(value)
Use .toBe to compare primitive values or to check referential identity of object instances. It calls Object.is to compare values, which is even better for testing than === strict equality operator.

### .toHaveBeenCalled()
Also under the alias: .toBeCalled()

Use .toHaveBeenCalled to ensure that a mock function was called.