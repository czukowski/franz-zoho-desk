module.exports = (Franz) => {
    function getNotificationsCount() {
        const badgeCountElement = document.querySelector('#fbadgecnt');
        if (badgeCountElement !== null) {
            return parseInt(badgeCountElement.innerHTML);
        }
        return 0;
    }

    function getNewTicketsCount() {
        return document.querySelectorAll('#list_view_Cases .tag-style[name^=new_]').length;
    }

    function updateBadges() {
        Franz.setBadge(getNotificationsCount(), getNewTicketsCount());
    }

    Franz.loop(updateBadges);

    Franz.onNotify(notification => {
        console.log(notification);
        return notification;
    });
};
