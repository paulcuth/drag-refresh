
(function ($) {
	
	jQuery.fn.dragRefresh = function (callback, config) {
		config = config || {};
			
		var dragText = config.dragText || '&#8595 Drag down to refresh.',
			releaseText = config.releaseText || '&#8593; Release to refresh.',
			backgroundColor = config.backgroundColor || '#ccc',
			color = config.color || '#606060',
			divideBorder = config.divideBorder || '1px dotted #b7b7b7',
			
			$outer = $('<div>').addClass ('drag-refresh-outer').css ({
				overflow: 'hidden',
				height: this.css ('height'),
				minHeight: this.css ('min-height')
			}),
			
			$inner = $('<div>').addClass ('drag-refresh-inner').css ({
				marginTop: '-50px'
			}),
			
			$p = $('<p>').addClass ('refresh').html (dragText).css ({
				borderTop: divideBorder,
				color: color,
				lineHeight: '50px',
				margin: 0,
				padding: 0,
				textAlign: 'center',
				WebkitBoxShadow: 'inset 0 -3px 3px rgba(0,0,0,.1)',
				MozBoxShadow: 'inset 0 -3px 3px rgba(0,0,0,.1)',
				OBoxShadow: 'inset 0 -3px 3px rgba(0,0,0,.1)',
				boxShadow: 'inset 0 -3px 3px rgba(0,0,0,.1)'
			}),

			startY,
			willRefresh = false;


		this.before ($outer);
		$inner.appendTo ($outer).append ($p).append (this);


		$outer.bind ('mousedown touchstart', function (e) {
			startY = e.originalEvent.touches? e.originalEvent.touches[0].pageY : e.pageY;
			e.preventDefault ();

		}).bind ('mousemove touchmove', function (e) {

			if (startY !== undefined) {
				var offset = (e.originalEvent.touches? e.originalEvent.touches[0].pageY : e.pageY) - startY;
				if (offset < 0) offset = 0;
		
				$inner.css ('margin-top', offset / 2 - 50 + 'px');
				
				if (!willRefresh && offset > 100) {
					willRefresh = true;
					$p.html (releaseText);

				} else if (willRefresh && offset <= 100) {
					willRefresh = false;
					$p.html (dragText);
				}
			}
			
			e.preventDefault ();
			
		}).bind ('mouseup mouseout touchend', function (e) {
			
			if (willRefresh) callback ();
			
			$inner.animate ({
				'margin-top': -50
			}, function () {
				$p.html (dragText);
			});

			startY = undefined;
			willRefresh = false;
		});	

	
		return this;
	};

})(jQuery);