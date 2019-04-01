module.exports = (Franz) => {
    function getNotifications() {
        const badgeCountElement = document.querySelector('#fbadgecnt');
        if (badgeCountElement !== null) {
            const notifications = parseInt(badgeCountElement.innerHTML);
            Franz.setBadge(notifications);
        }
    }

    Franz.loop(getNotifications);

    Franz.onNotify(notification => {
        console.log(notification);
        return notification;
    });
};
