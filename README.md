# Micro Frontend & Module Federation feat. JS and Webpack 5

![](Micro-Frontend.png) 

## Module Federation
- Allows JS app to dynamically load code from another app.

- Introduced in webpack 5.

- Module shared can be functions, classess, etc.

- Federated code can always load it's dependencies, but will attempt to use consumer's dependencies first.

## Micro Frontend
- Composing frontend using component built by different teams.

- Using Module Federation to share frontend codes.

- Preferably must be framework agnostic.

- Preferably musn't share much state across components.

- Component styles must be centered either in host/root or module.
