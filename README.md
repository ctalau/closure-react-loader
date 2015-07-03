Closure React Loader
====================


In development mode, Google Closure Library loads scripts dynamically 
using the `goog.require` and `goog.provide` directives. However, if some
of the files use JSX syntax, they must be transformed before being loaded.

This library should be loaded before the Google Closure Library and after 
the React JSXTransformer. It overrides the default Closure script loading
to perform JSX transformation on the fly. 

It is a development tool. Do not use it in production!

