jQuery(document).ready(function($){

    // First check if tabs exist. If so, set initial state of tabs
    if ($('.page-builder-tabs').length > 0) {
        let initialTab = document.querySelector('[data-content]')
        let initialTabHeight = document.querySelector('[data-content]').scrollHeight
        document.querySelector('.tabs__content-container').style.minHeight = initialTabHeight + 'px'
        document.querySelector('.tabs__content-container').style.maxHeight = initialTabHeight + 'px'

        // When the window is resizes, we need to recalculate the height of the container
        // based on the current active tab
        window.onresize = function(event) {
            let activeTabHeight = document.querySelector('.tabs__content.active').scrollHeight
            document.querySelector('.tabs__content-container').style.minHeight = activeTabHeight + 'px'
            document.querySelector('.tabs__content-container').style.maxHeight = activeTabHeight + 'px'
        };
    }


    // When a tab title is clicked
    $('[data-tab]').on('click', event => {

        // Arrow function doesn't have access to $(this)
        // so you need to use $(event.currentTarget) instead
        $(event.currentTarget)
        .addClass('active')
        .siblings('[data-tab]')
        .removeClass('active')

        let tabNew = $(event.currentTarget).parent().siblings().children('[data-content=' + $(event.currentTarget).data('tab') + ']')
        let tabNewHeight = tabNew[0].scrollHeight    
        document.querySelector('.tabs__content-container').style.minHeight = tabNewHeight + 'px'
        document.querySelector('.tabs__content-container').style.maxHeight = tabNewHeight + 'px'

        $(event.currentTarget).parent().siblings()
        .children('[data-content=' + $(event.currentTarget).data('tab') + ']')
        .addClass('active')
        .siblings('[data-content]')
        .removeClass('active')

        event.preventDefault()
    });

})(jQuery);