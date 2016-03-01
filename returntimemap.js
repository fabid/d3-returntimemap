(function() {
  d3.returntimemap = function() {
    var values = d3.identity;
    function returntimemap(data) {
      data.sort(function(a, b) {
        return values(a) - values(b);
      });
      var timemapData = data.map(function(d, i, a) {
        var ev = d;
        if (i == 0) {
          ev.y = values.call(returntimemap, a[i + 1]) - values.call(returntimemap, d);
        }
        else if (i == a.length - 1) {
          ev.x = values.call(returntimemap, d) - values.call(returntimemap, a[i - 1]);
        } else {
          ev.x = values.call(returntimemap, d) - values.call(returntimemap, a[i - 1]);
          ev.y = values.call(returntimemap, a[i + 1]) - values.call(returntimemap, d);
        }
        return ev;
      });
      timemapData.shift();
      timemapData.pop();
      return timemapData;
    }

    returntimemap.values = function(_) {
      if (!arguments.length) return values;
      values = _;
      return returntimemap;
    };
    return returntimemap;
  };
})();
