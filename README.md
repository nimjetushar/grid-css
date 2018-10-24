# grid.css

[![Website](https://img.shields.io/website-up-down-green-red/http/shields.io.svg?label=my-website)](https://nimjetushar.github.io/grid-css/)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2a85c6fb030e4352a35243ec1d7eabcf)](https://www.codacy.com/app/nimjetushar/grid-css?utm_source=github.com&utm_medium=referral&utm_content=nimjetushar/grid-css&utm_campaign=Badge_Grade)

Grid css for creating responsive web designs

```html
    <head>
        <link rel="stylesheet" href="./dist/grid.css" />
    </head>
    <div class="container">
        <h1>Grid examples</h1>
        <p class="lead">Basic grid layouts to get you familiar with using grid system.</p>

        <h2>Basic understanding</h2>
        <p>The basic understanding for rendering grid is the sumation of the used columns
            which should always be eqaul to 12.</p>
        <p>Consider rendering grid using class <code>.col-4</code><code>.col-6</code><code>.col-2</code>.
            In this sample the summation is <code>4 + 6 + 2 = 12</code> so the grid would
            render properly. So always take care column sumation.</p>

        <h2 class="mt">Five grid tiers</h2>
        <p>There are five tiers to the grid system. Each tier starts at a minimum
            viewport size and
            automatically applies to the larger devices unless overridden.</p>

        <div class="row mb">
            <div class="col-4 grid-themed">.col-4</div>
            <div class="col-4 grid-themed">.col-4</div>
            <div class="col-4 grid-themed">.col-4</div>
        </div>

        <div class="row mb">
            <div class="col-sm-4 grid-themed">.col-sm-4</div>
            <div class="col-sm-4 grid-themed">.col-sm-4</div>
            <div class="col-sm-4 grid-themed">.col-sm-4</div>
        </div>

        <div class="row mb">
            <div class="col-md-4 grid-themed">.col-md-4</div>
            <div class="col-md-4 grid-themed">.col-md-4</div>
            <div class="col-md-4 grid-themed">.col-md-4</div>
        </div>

        <div class="row mb">
            <div class="col-lg-4 grid-themed">.col-lg-4</div>
            <div class="col-lg-4 grid-themed">.col-lg-4</div>
            <div class="col-lg-4 grid-themed">.col-lg-4</div>
        </div>

        <div class="row mb">
            <div class="col-xl-4 grid-themed">.col-xl-4</div>
            <div class="col-xl-4 grid-themed">.col-xl-4</div>
            <div class="col-xl-4 grid-themed">.col-xl-4</div>
        </div>

        <h2 class="mt">Three equal columns</h2>
        <p>Get three equal-width columns. On mobile devices, tablets and below, the
            columns will automatically stack.</p>
        <div class="row mb">
            <div class="col-md-4 grid-themed">.col-md-4</div>
            <div class="col-md-4 grid-themed">.col-md-4</div>
            <div class="col-md-4 grid-themed">.col-md-4</div>
        </div>

        <h2 class="mt">Three unequal columns</h2>
        <p>Get three columns of various widths. Remember, grid columns should add up to
            twelve for a
            single horizontal block. More than that, and columns start stacking no matter
            the viewport.</p>
        <div class="row mb">
            <div class="col-md-3 grid-themed">.col-md-3</div>
            <div class="col-md-6 grid-themed">.col-md-6</div>
            <div class="col-md-3 grid-themed">.col-md-3</div>
        </div>

        <h2 class="mt">Two columns</h2>
        <p>Get two columns.</p>
        <div class="row mb">
            <div class="col-md-8 grid-themed">.col-md-8</div>
            <div class="col-md-4 grid-themed">.col-md-4</div>
        </div>
    </div>
```

## Licence

[![GitHub license](https://img.shields.io/github/license/nimjetushar/grid-css.svg)](https://github.com/nimjetushar/grid-css/blob/master/LICENSE)
