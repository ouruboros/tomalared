function pintarBotonesComment(postId, commentId) {
	var elemento = postId;
	if(commentId != ""){
		elemento = commentId;
	}
	$(elemento + ".borrarComentario").button({
		icons : {
			primary : "ui-icon-trash"
		},
		text : false
	});
	$(postId + ".comentar").button();
}

function inicioComment(idPost) {
	$(idPost + ".formComentContent").charcount({
		position : 'after'
	});
}

function llegadaComment(notif, id) {
	if($("#post_" + notif.resource_id).length > 0){
		$.getScript("/comment/list/" + id + "?notif=true&remote=true");
	} else {
		$.getScript("/post/list/" + notif.resource_id + "?post=" + notif.resource_id + "&notif=true&remote=true");
	}
}

function vueltaComment(postId, commentId) {
	var elemento = postId;
	if(commentId != ""){
		elemento = commentId;
	}
	setTimeout(function() {
		$(elemento).removeAttr("style");
	}, 1000);
};

function exitoComment(postId, commentId) {
	pintarBotonesComment(postId, commentId);
	pintarBotonesVote(postId, commentId);
	$(commentId + " .formComentContent").val("").trigger('charcount');
	$(commentId).effect("highlight", {}, "fast", vueltaComment(postId, commentId));
}


$(document).ready(function() {
	$(document).on("click", ".comentar", function() {
		var texto = $(this).parent().find("textarea#body").val();
		if (texto.length == 0) {
			alert("El mensaje está vacío ¿seguro no quieres decir nada?");
			return false;
		}
	});
	inicioComment("");
	pintarBotonesComment("", "");
	pintarBotonesVote("", "");
}); 