# d3-returntimemap

Return Time map layout for events datasets.
 

## Demo

[Demo on blockbuilder](http://blockbuilder.org/fabid/024452c42b94723b401d)

## API Reference

The **d3.returntimemap** plugin implements **return time maps**, which are useful to analyse succession of events on different time scales.

A return time map is a two-dimensional scatterplot, where the x and y coordinates represent respectvely the time before event and the time after event.

Inspired by [this post from District Data Labs](https://districtdatalabs.silvrback.com/time-maps-visualizing-discrete-events-across-many-timescales?utm_campaign=Data%2BElixir&utm_medium=email&utm_source=Data_Elixir_51) where more information can be found.

<a name="returntimemap" href="#returntimemap">#</a> d3.<b>returntimemap</b>()

Constructs a new default returntimemap layout.

<a name="returntimemap" href="#_returntimemap">#</a> <b>returntimemap</b>(<i>points</i>)

Evaluates the returntimemap layout on the specified array of *points*, returning the array of *points* with some additional properties:

* x - the x-coordinate representing the time before event
* y - the y-coordinate representing the time after event


<a name="values" href="#values">#</a> returntimemap.<b>values</b>([<i>accessor</i>])

Sets or gets the *values*-accessor function for the returntimemap layout which should return the event **Date**. If *accessor* is specified, sets the *x*-accessor function and returns the returntimemap layout; if *accessor* is not specified, returns the current *x*-accessor function, which defaults to `d3.identity()`.