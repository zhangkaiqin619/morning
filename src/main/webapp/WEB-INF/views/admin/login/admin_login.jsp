<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<%@ include file="/WEB-INF/layouts/base.jsp"%>
<!DOCTYPE html>
<html>
  <head>
    <title>后台管理系统 | 步登网</title>
	<meta name="author" content="步登Morning." />  
	<meta name="keywords" content="步登商城,步登Morning,电子商城,步登社区,公益商城,在线购物">
	<meta name="description" content="步登Morning公益商城是中国公益性在线电子商城，以商城B2C模式运营的公益在线商城，是一家致力于将传统公益商城互联网化的创新公益商城。">
	<link rel="shortcut icon" href="${ctx}/favicon.ico" type="image/x-icon" />
	<link rel="stylesheet" href="${ctxsta}/admin/login/css/style.css" />
	<script> var t1 = new Date().getTime(); baselocation='${ctx}';</script>
</head>
<body>
    <dl class="admin_login">
        <dt>
            <strong>步登后台管理系统</strong>
            <em>Management System</em>
    	</dt>
        <dd class="user_icon">
        	<input type="text" name="systemUser.loginName" placeholder="账号" class="login_txtbx"/>
        </dd>
        <dd class="pwd_icon">
        	<input type="password" name="systemUser.loginPassword" placeholder="密码" class="login_txtbx" data-exponent="${publicKeyMap.exponent}" data-modulus="${publicKeyMap.modulus}" />
        </dd>
        <dd class="val_icon">
            <div class="checkcode">
                <input type="text" id="J_codetext" name="registerCode" placeholder="验证码" maxlength="4" class="login_txtbx">
                <img class="J_codeimg" src="${ctx}/captchaMain-image.jpg" id="kaptchaImage" />
            </div>
        	<input type="button" value="点击,换一张" class="ver_btn" onclick="$(this).prev().find('img').click()">
        </dd>
        <dd>
        	<input type="button" value="立即登陆" class="submit_btn"/>
        </dd>
        <dd>
            <p>© 2016 步登商城 版权所有</p>
            <p><span id="showsectime"></span></p>
        </dd>
    </dl>

    <script src="${ctxsta}/common/jquery-2.2.3.min.js"></script>
    <script src="${ctxsta}/common/layer/layer.js"></script>
	<script src="${ctxsta}/common/security/security.js"></script>
	<script src="${ctxsta}/admin/login/js/Particleground.js"></script>
	<script src="${ctxsta}/admin/login/js/login.js"></script>
</body>
</html>