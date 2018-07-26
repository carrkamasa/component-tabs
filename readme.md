# Adaptive height tabs component

## Purpose
This component creates a set of tabs within a container. The containers height will adjust based on the active tab's height, with a transition when a tab is changed. There is also a small fade between the previous and active content.

The purpose of these tabs is to work with very minimal front-end/view structure.

## Usage
Simply copy:

```src/_component.scss```
```src/app.js```

The HTML structure can be extracted from ```index.html```

## Roadmap
- [x] Initial release
- [ ] Remove any jQuery dependency
- [ ] Add support for hash-based linking i.e. example.com/example#tab-1