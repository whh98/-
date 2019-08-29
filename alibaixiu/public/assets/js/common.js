$('#logout').on('click', function() {
    var isConfirm = confirm('您真的要退出吗?');
    if (isConfirm) {
        // alert('用户点击了确认按钮')
        $.ajax({
            type: 'post',
            url: '/logout',
            success: function() {
                location.href = 'login.html';
            },
            error: function() {
                alert('退出失败')
            }
        })
    }
});

$.ajax({
    type: 'get',
    url: '/users/' + userId,
    success: function(res) {
        // console.log(res);
        $('.avatar').attr('src', res.avatar);
        $('.name').html(res.nickName);
    }
})