(function($) {
    $(document).ready(function() {
        $.jScrollability([
            {
                'selector': '.slide-right-to-left',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'left': {
                        'start': -100,
                        'end': 0,
                        'unit': '%'
                    }
                }
            },  
            {
                'selector': '.slide-left-to-right',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'left': {
                        'start': 100,
                        'end': 0,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.slide-bottom-to-top',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'top': {
                        'start': 100,
                        'end': 0,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.reveal',
                'start': 'parent',
                'end': 'parent',
                'fn': {
                    'top': {
                        'start': 100,
                        'end': 20,
                        'unit': '%'
                    }
                }
            },
            {
                'selector': '.text-wrapper',
                'start': function($el) { return $el.offset().top + $el.height() },
                'end': 'parent',
                'fn': function($el,pcnt) {
                    var $spans = $el.find('span');
                    var point = Math.floor(($spans.length+1) * pcnt);
                    $spans.each(function(i,el) {
                        var $span = $(el);
                        if (i < point) {
                            $span.addClass('visible');
                        } else {
                            $span.removeClass('visible');
                        }
                    });
                }
            }
        ]);
    });
})(jQuery);