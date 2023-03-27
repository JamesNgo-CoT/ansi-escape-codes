# ansi-escape-codes

## Constants

### Reset

- RESET

### Colours

- BLACK
- RED
- GREEN
- YELLOW
- BLUE
- MAGENTA
- CYAN
- WHITE
- BRIGHT_BLACK
- BRIGHT_RED
- BRIGHT_GREEN
- BRIGHT_YELLOW
- BRIGHT_BLUE
- BRIGHT_MAGENTA
- BRIGHT_CYAN
- BRIGHT_WHITE

### Bacground Colours

- BG_BLACK
- BG_RED
- BG_GREEN
- BG_YELLOW
- BG_BLUE
- BG_MAGENTA
- BG_CYAN
- BG_WHITE
- BG_BRIGHT_BLACK
- BG_BRIGHT_RED
- BG_BRIGHT_GREEN
- BG_BRIGHT_YELLOW
- BG_BRIGHT_BLUE
- BG_BRIGHT_MAGENTA
- BG_BRIGHT_CYAN
- BG_BRIGHT_WHITE

### Decorations

- BOLD
- UNDERLINE
- REVERSED

## Functions

### colour(id)

``` JavaScript
process.stdout.write(`${colour(1)}Hello World${RESET}`);
```

### backgroundColour(id)
``` JavaScript
process.stdout.write(`${bgColour(1)}Hello World${RESET}`);
```

### up(places)

``` JavaScript
process.stdout.write(up(1));
```

### down(places)

``` JavaScript
process.stdout.write(down(1));
```

### right(places)

``` JavaScript
process.stdout.write(right(1));
```

### left(places)

``` JavaScript
process.stdout.write(left(1));
```

## Reference

https://www.lihaoyi.com/post/BuildyourownCommandLinewithANSIescapecodes.html