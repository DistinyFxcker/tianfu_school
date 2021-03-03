// 报考咨询表单提交
$('.mesForm').submit(function () {
    var obj = $(this),
        data = { source: 'message' };
    var sex = getRadioValue('sex')
    getSelectValue(data)
    data['sex'] = sex
    data = getFormData(obj, data);
    if (!data.name) {
        alert('请填写姓名');
        obj.find('input[name="name"]').focus();
        return false;
    }
    if (!data.tel) {
        alert('请输入电话');
        obj.find('input[name="tel"]').focus();
        return false;
    }
    if(!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(data.tel))){
        alert("手机号码有误，请重填");
        obj.find('input[name="tel"]').focus();
        return false;
    }
    subAjaxForm(obj, data, function () { }, function (msg) {
        if (msg && msg.code == 1) {
            obj.removeClass('lj');
            alert(msg.html ? msg.html : '提交成功');
            window.location.reload();
        } else {
            obj.removeClass('lj');
            alert(msg.html ? msg.html : '服务器响应失败,请重传提交');
        }
    }, function () { })

    return false;
})

// 获取radio 值
function getRadioValue(radioName) {
    var radioValue;
    radioValue = document.getElementsByName(radioName);
    if (radioValue != null) {
        var i;
        for (i = 0; i < radioValue.length; i++) {
            if (radioValue[i].checked) {
                return radioValue[i].value;
            }
        }
    }
    return null;
}
// 获取页面所有select 的选择值
function getSelectValue(data) {
    var select = [];
    $("select option:selected").each(function () {
        if ($(this).val()) {
            select.push($(this).val());
        }
    });
    $("select").each(function (i) {
        if ($(this).attr('name')) {
            var name = $(this).attr('name')
            data[name] = select[i]
        }
    })
}

function getFormData(obj, data) {
    data['sign'] = $('meta[name="sign"]').attr('content');
    obj.find('.formVal').each(function () {
        data[$(this).attr('name')] = $(this).val();
    })
    return data;
}
function subAjaxForm(obj, data, bre, suc, err) {
    if (obj.hasClass('lj')) return false;
    $.ajax({
        type: 'post',
        data: data,
        dataType: 'json',
        beforeSend: function () {
            bre();
            obj.addClass('lj');
        },
        error: function () {
            alert('服务器响应失败');
            obj.removeClass('lj');
            err();
        },
        success: function (msg) {
            suc(msg);
        }
    })
}