module.exports = (Franz) => {
    function getNotificationsCount() {
        let counted = 0;
        const badgeCountElement = document.querySelector('#fbadgecnt');
        const emailFailureExlamationElement = document.querySelector('#email_failure_noti');
        if (emailFailureExlamationElement !== null && emailFailureExlamationElement.offsetParent !== null) {
            counted += 1;
        }
        if (badgeCountElement !== null) {
            return counted += parseInt(badgeCountElement.innerHTML);
        }
        return counted;
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
