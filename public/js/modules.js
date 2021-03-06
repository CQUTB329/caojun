(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1136,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"./img/bgimage.jpg", id:"bgimage"},
		{src:"./img/bg2.jpg", id:"bg2"},
		{src:"./img/bg3.jpg", id:"bg3"},
		{src:"./img/results.png", id:"results"},
		{src:"./img/share.png", id:"share"},
		{src:"./sounds/music.mp3", id:"music"},
		{src:"./sounds/sound1.mp3", id:"sound1"},
		{src:"./sounds/sound2.mp3", id:"sound2"}
	]
};



// symbols:

// stage content:

(lib.pulse = function(mode,startPosition,loop) {
	loop = false;
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.paused = true;

	

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1072));

	// Rhythm3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33CCFF").ss(28).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape.setTransform(320,860);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(57,159,193,0.667)").ss(22.7).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_1.setTransform(320,860);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(62,113,130,0.333)").ss(17.4).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_2.setTransform(320,860);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(68,68,68,0)").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_3.setTransform(320,860);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},105).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

	// Rhythm2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0)").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_4.setTransform(320,860,3,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggzAAAQAAtlJnpnQJnpnNlAAQNmAAJnJnQJnJnAANlQAANmpnJnQpnJntmAAQtlAApnpnQpnpnAAtmg");
	this.shape_5.setTransform(320,860);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggyAAAQAAtlJnpmQJmpnNlAAQNmAAJmJnQJnJmAANlQAANmpnJmQpmJntmAAQtlAApmpnQpnpmAAtmg");
	this.shape_6.setTransform(320,860);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggyAAAQAAtkJnpmQJnpoNkAAQNlAAJmJoQJoJmAANkQAANlpoJmQpmJotlAAQtkAApnpoQpnpmAAtlg");
	this.shape_7.setTransform(320,860);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggxAAAQAAtjJnpnQJmpmNkAAQNkAAJnJmQJmJnAANjQAANkpmJnQpnJmtkAAQtkAApmpmQpnpnAAtkg");
	this.shape_8.setTransform(320,860);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggwAAAQAAtjJnpmQJmpnNjAAQNkAAJmJnQJnJmAANjQAANkpnJmQpmJntkAAQtjAApmpnQpnpmAAtkg");
	this.shape_9.setTransform(320,860);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EgguAAAQAAtiJlpnQJmplNjAAQNkAAJmJlQJlJnAANiQAANjplJnQpmJltkAAQtjAApmplQplpnAAtjg");
	this.shape_10.setTransform(320,860);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggtAAAQAAtiJmplQJlpmNiAAQNjAAJlJmQJmJlAANiQAANjpmJlQplJmtjAAQtiAAplpmQpmplAAtjg");
	this.shape_11.setTransform(320,860);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggrAAAQAAthJlplQJlplNhAAQNiAAJlJlQJlJlAANhQAANiplJlQplJltiAAQthAAplplQplplAAtig");
	this.shape_12.setTransform(320,860);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggoAAAQAAtgJkpkQJkpkNgAAQNhAAJkJkQJkJkAANgQAANhpkJkQpkJkthAAQtgAApkpkQpkpkAAthg");
	this.shape_13.setTransform(320,860);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggmAAAQAAtfJjpkQJkpjNfAAQNgAAJkJjQJjJkAANfQAANgpjJkQpkJjtgAAQtfAApkpjQpjpkAAtgg");
	this.shape_14.setTransform(320,860);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggjAAAQAAteJipjQJjpiNeAAQNfAAJiJiQJjJjAANeQAANfpjJiQpiJjtfAAQteAApjpjQpipiAAtfg");
	this.shape_15.setTransform(320,860);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EgggAAAQAAtdJhpiQJiphNdAAQNeAAJhJhQJiJiAANdQAANepiJiQphJhteAAQtdAApiphQphpiAAteg");
	this.shape_16.setTransform(320,860);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggdAAAQAAtcJgphQJhpgNcAAQNdAAJhJgQJgJhAANcQAANdpgJhQphJgtdAAQtcAAphpgQpgphAAtdg");
	this.shape_17.setTransform(320,860);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggaAAAQAAtaJgpgQJgpgNaAAQNbAAJgJgQJgJgAANaQAANbpgJgQpgJgtbAAQtaAApgpgQpgpgAAtbg");
	this.shape_18.setTransform(320,860);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggWAAAQAAtYJepgQJfpeNZAAQNaAAJfJeQJeJgAANYQAANZpeJgQpfJetaAAQtZAApfpeQpepgAAtZg");
	this.shape_19.setTransform(320,860);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggSAAAQAAtXJdpeQJepdNXAAQNYAAJeJdQJdJeAANXQAANYpdJeQpeJdtYAAQtXAApepdQpdpeAAtYg");
	this.shape_20.setTransform(320,860);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggOAAAQAAtWJcpbQJcpdNWAAQNXAAJbJdQJdJbAANWQAANXpdJbQpbJdtXAAQtWAApcpdQpcpbAAtXg");
	this.shape_21.setTransform(320,860);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggKAAAQAAtTJbpcQJbpbNUAAQNVAAJbJbQJbJcAANTQAANUpbJcQpbJbtVAAQtUAApbpbQpbpcAAtUg");
	this.shape_22.setTransform(320,860);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggFAAAQAAtSJapZQJZpaNSAAQNTAAJZJaQJaJZAANSQAANTpaJZQpZJatTAAQtSAApZpaQpapZAAtTg");
	this.shape_23.setTransform(320,860);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggAAAAQAAtPJYpYQJYpZNQAAQNQAAJYJZQJZJYAANPQAANQpZJYQpYJZtQAAQtQAApYpZQpYpYAAtQg");
	this.shape_24.setTransform(320,860);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/7AAQAAtOJXpWQJXpWNNAAQNOAAJXJWQJWJWAANOQAANPpWJWQpXJXtOAAQtNAApXpXQpXpWAAtPg");
	this.shape_25.setTransform(320,860);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/1AAQAAtLJVpVQJVpVNLAAQNMAAJVJVQJVJVAANLQAANMpVJVQpVJVtMAAQtLAApVpVQpVpVAAtMg");
	this.shape_26.setTransform(320,860);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/wAAQAAtJJUpTQJUpTNIAAQNJAAJUJTQJTJTAANJQAANKpTJTQpUJTtJAAQtIAApUpTQpUpTAAtKg");
	this.shape_27.setTransform(320,860);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/qAAQAAtGJSpSQJSpSNGAAQNHAAJSJSQJSJSAANGQAANHpSJSQpSJStHAAQtGAApSpSQpSpSAAtHg");
	this.shape_28.setTransform(320,860);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/jAAQAAtEJPpQQJRpPNDAAQNEAAJQJPQJQJQAANEQAANEpQJQQpQJQtEAAQtDAApRpQQpPpQAAtEg");
	this.shape_29.setTransform(320,860);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/dAAQAAtBJOpOQJOpNNBAAQNCAAJOJNQJNJOAANBQAANCpNJOQpOJOtCAAQtBAApOpOQpOpOAAtCg");
	this.shape_30.setTransform(320,860);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/WAAQAAs+JMpMQJMpMM+AAQM/AAJMJMQJMJMAAM+QAAM/pMJMQpMJMs/AAQs+AApMpMQpMpMAAs/g");
	this.shape_31.setTransform(320,860);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/PAAQAAs7JKpKQJJpKM8AAQM8AAJKJKQJKJKAAM7QAAM8pKJKQpKJKs8AAQs8AApJpKQpKpKAAs8g");
	this.shape_32.setTransform(320,860);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/IAAQAAs5JIpHQJHpHM5AAQM6AAJHJHQJHJHAAM5QAAM6pHJHQpHJHs6AAQs5AApHpHQpIpHAAs6g");
	this.shape_33.setTransform(320,860);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/AAAQAAs1JFpGQJGpFM1AAQM2AAJFJFQJGJGAAM1QAAM2pGJFQpFJGs2AAQs1AApGpGQpFpFAAs2g");
	this.shape_34.setTransform(320,860);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A+5AAQAAsyJEpDQJDpDMyAAQMzAAJDJDQJDJDAAMyQAAMzpDJDQpDJDszAAQsyAApDpDQpEpDAAszg");
	this.shape_35.setTransform(320,860);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A+xAAQAAsvJBpAQJBpCMvAAQMwAAJBJCQJBJAAAMvQAAMwpBJAQpBJCswAAQsvAApBpCQpBpAAAswg");
	this.shape_36.setTransform(320,860);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A+oAAQAAsrI+o/QI/o+MrAAQMsAAI+I+QI/I/AAMrQAAMso/I/Qo+I+ssAAQsrAAo/o+Qo+o/AAssg");
	this.shape_37.setTransform(320,860);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A+gAAQAAsnI8o9QI8o7MoAAQMoAAI9I7QI7I9AAMnQAAMoo7I9Qo9I7soAAQsoAAo8o7Qo8o9AAsog");
	this.shape_38.setTransform(320,860);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A+XAAQAAskI5o6QI6o5MkAAQMlAAI6I5QI5I6AAMkQAAMlo5I6Qo6I5slAAQskAAo6o5Qo5o6AAslg");
	this.shape_39.setTransform(320,860);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A+OAAQAAshI3o2QI3o3MgAAQMhAAI3I3QI3I2AAMhQAAMio3I2Qo3I3shAAQsgAAo3o3Qo3o2AAsig");
	this.shape_40.setTransform(320,860);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A+FAAQAAscI0o1QI0o0MdAAQMdAAI0I0QI0I1AAMcQAAMdo0I1Qo0IzsdAAQsdAAo0ozQo0o1AAsdg");
	this.shape_41.setTransform(320,860);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A97AAQAAsYIxoyQIxoxMZAAQMZAAIyIxQIxIyAAMYQAAMZoxIyQoyIxsZAAQsZAAoxoxQoxoyAAsZg");
	this.shape_42.setTransform(320,860);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A9yAAQAAsVIvouQIuovMVAAQMWAAIuIvQIvIuAAMVQAAMWovIuQouIvsWAAQsVAAouovQovouAAsWg");
	this.shape_43.setTransform(320,860);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A9oAAQAAsRIsorQIrosMRAAQMSAAIrIsQIsIrAAMRQAAMRosIsQorIrsSAAQsRAAororQososAAsRg");
	this.shape_44.setTransform(320,860);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A9dAAQAAsMIoooQIpopMMAAQMNAAIoIpQIpIoAAMMQAAMNopIoQooIpsNAAQsMAAopopQooooAAsNg");
	this.shape_45.setTransform(320,860);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A9TAAQAAsIImolQImomMHAAQMIAAImImQImIlAAMIQAAMJomIlQomIlsIAAQsHAAomolQomolAAsJg");
	this.shape_46.setTransform(320,860);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A9IAAQAAsDIioiQIjojMDAAQMEAAIiIjQIjIiAAMDQAAMEojIiQoiIjsEAAQsDAAojojQoioiAAsEg");
	this.shape_47.setTransform(320,860);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A89AAQAAr+IfogQIfoeL/AAQMAAAIfIeQIeIgAAL+QAAL/oeIgQofIfsAAAQr/AAofofQofogAAr/g");
	this.shape_48.setTransform(320,860);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8yAAQAAr6IcobQIcocL6AAQL7AAIcIcQIcIbAAL6QAAL7ocIbQocIcr7AAQr6AAococQocobAAr7g");
	this.shape_49.setTransform(320,860);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8mAAQAAr1IYoZQIZoYL1AAQL2AAIZIYQIYIZAAL1QAAL2oYIZQoZIYr2AAQr1AAoZoYQoYoZAAr2g");
	this.shape_50.setTransform(320,860);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8aAAQAArxIVoUQIUoVLxAAQLxAAIVIVQIVIUAALxQAALxoVIVQoVIVrxAAQrxAAoUoVQoVoVAArxg");
	this.shape_51.setTransform(320,860);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8OAAQAArrIRoRQIRoSLsAAQLsAAISISQIRIRAALrQAALsoRIRQoSISrsAAQrsAAoRoSQoRoRAArsg");
	this.shape_52.setTransform(320,860);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8CAAQAArmIOoOQIOoOLmAAQLnAAIOIOQIOIOAALmQAALnoOIOQoOIOrnAAQrmAAoOoOQoOoOAArng");
	this.shape_53.setTransform(320,860);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("rgba(0,0,0,0.024)").ss(12).p("A71AAQAArhIKoKQIKoKLhAAQLiAAIKIKQIKIKAALhQAALioKIKQoKIKriAAQrhAAoKoKQoKoKAArig");
	this.shape_54.setTransform(320,860);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(0,0,0,0.024)").ss(12).p("A7oAAQAArcIGoGQIGoGLcAAQLdAAIGIGQIGIGAALcQAALcoGIHQoGIGrdAAQrcAAoGoGQoGoHAArcg");
	this.shape_55.setTransform(320,860);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0.024)").ss(12).p("A7bAAQAArWICoDQICoCLXAAQLYAAICICQICIDAALWQAALXoCIDQoCICrYAAQrXAAoCoCQoCoDAArXg");
	this.shape_56.setTransform(320,860);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(0,0,0,0.024)").ss(12).p("A7OAAQAArRH+n+QIAn/LQAAQLRAAIAH/QH+H+AALRQAALSn+H+QoAH/rRAAQrQAAoAn/Qn+n+AArSg");
	this.shape_57.setTransform(320,860);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0.027)").ss(12).p("A7AAAQAArLH6n6QH7n7LLAAQLMAAH7H7QH6H6AALLQAALMn6H6Qn7H7rMAAQrLAAn7n7Qn6n6AArMg");
	this.shape_58.setTransform(320,860);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(0,0,0,0.027)").ss(12).p("A6zAAQAArGH3n2QH2n3LGAAQLHAAH2H3QH3H2AALGQAALHn3H2Qn2H2rHAAQrGAAn2n2Qn3n2AArHg");
	this.shape_59.setTransform(320,860);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0.027)").ss(12).p("A6lAAQAArAHznyQHynzLAAAQLBAAHyHzQHzHyAALAQAALBnzHyQnyHzrBAAQrAAAnynzQnznyAArBg");
	this.shape_60.setTransform(320,860);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("rgba(0,0,0,0.027)").ss(12).p("A6WAAQAAq5HunvQHunuK6AAQK6AAHvHuQHuHvAAK5QAAK6nuHvQnvHuq6AAQq6AAnunuQnunvAAq6g");
	this.shape_61.setTransform(320,860);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0.031)").ss(12).p("A6IAAQAAqzHqnqQHqnqK0AAQK1AAHqHqQHqHqAAKzQAAK0nqHqQnqHqq1AAQq0AAnqnqQnqnqAAq0g");
	this.shape_62.setTransform(320,860);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(0,0,0,0.031)").ss(12).p("A55AAQAAquHmnlQHmnlKtAAQKuAAHmHlQHmHlAAKuQAAKvnmHlQnmHlquAAQqtAAnmnlQnmnlAAqvg");
	this.shape_63.setTransform(320,860);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("rgba(0,0,0,0.031)").ss(12).p("A5qAAQAAqnHinhQHhniKnAAQKoAAHhHiQHiHhAAKnQAAKoniHhQnhHhqoAAQqnAAnhnhQninhAAqog");
	this.shape_64.setTransform(320,860);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("rgba(0,0,0,0.031)").ss(12).p("A5aAAQAAqhHcndQHdncKhAAQKiAAHdHcQHcHdAAKhQAAKincHdQndHcqiAAQqhAAndncQncndAAqig");
	this.shape_65.setTransform(320,860);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0.035)").ss(12).p("A5LAAQAAqaHYnZQHYnYKbAAQKcAAHYHYQHYHZAAKaQAAKbnYHZQnYHYqcAAQqbAAnYnYQnYnZAAqbg");
	this.shape_66.setTransform(320,860);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(0,0,0,0.035)").ss(12).p("A47AAQAAqUHUnTQHTnUKUAAQKVAAHTHUQHUHTAAKUQAAKVnUHTQnTHUqVAAQqUAAnTnUQnUnTAAqVg");
	this.shape_67.setTransform(320,860);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(0,0,0,0.035)").ss(12).p("A4rAAQAAqNHPnPQHPnPKNAAQKOAAHPHPQHPHPAAKNQAAKOnPHPQnPHPqOAAQqNAAnPnPQnPnPAAqOg");
	this.shape_68.setTransform(320,860);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A4aAAQAAqGHKnKQHKnKKGAAQKHAAHKHKQHKHKAAKGQAAKHnKHKQnKHKqHAAQqGAAnKnKQnKnKAAqHg");
	this.shape_69.setTransform(320,860);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A4KAAQAAqAHFnEQHFnGKAAAQKBAAHEHGQHGHEAAKAQAAKBnGHEQnEHGqBAAQqAAAnFnGQnFnEAAqBg");
	this.shape_70.setTransform(320,860);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A35AAQAAp4HAnBQHBnAJ4AAQJ5AAHBHAQHAHBAAJ4QAAJ5nAHBQnBHAp5AAQp4AAnBnAQnAnBAAp5g");
	this.shape_71.setTransform(320,860);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A3oAAQAApxG7m8QG8m6JxAAQJyAAG8G6QG7G8AAJxQAAJym7G8Qm8G6pyAAQpxAAm8m6Qm7m8AApyg");
	this.shape_72.setTransform(320,860);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(0,0,0,0.043)").ss(12).p("A3WAAQAApqG2m2QG2m2JqAAQJrAAG2G2QG2G2AAJqQAAJrm2G2Qm2G2prAAQpqAAm2m2Qm2m2AAprg");
	this.shape_73.setTransform(320,860);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("rgba(0,0,0,0.043)").ss(12).p("A3FAAQAApjGxmxQGymwJiAAQJjAAGyGwQGxGxAAJjQAAJkmxGxQmyGwpjAAQpiAAmymwQmxmxAApkg");
	this.shape_74.setTransform(320,860);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("rgba(0,0,0,0.043)").ss(12).p("A2zAAQAApcGsmrQGrmsJcAAQJdAAGrGsQGsGrAAJcQAAJdmsGrQmrGspdAAQpcAAmrmsQmsmrAApdg");
	this.shape_75.setTransform(320,860);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("rgba(0,0,0,0.047)").ss(12).p("A2gAAQAApUGmmmQGmmmJUAAQJVAAGmGmQGmGmAAJUQAAJVmmGmQmmGmpVAAQpUAAmmmmQmmmmAApVg");
	this.shape_76.setTransform(320,860);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(0,0,0,0.047)").ss(12).p("A2OAAQAApMGhmhQGhmhJMAAQJNAAGhGhQGhGhAAJMQAAJNmhGhQmhGhpNAAQpMAAmhmhQmhmhAApNg");
	this.shape_77.setTransform(320,860);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("rgba(0,0,0,0.047)").ss(12).p("A17AAQAApFGbmbQGcmbJEAAQJFAAGcGbQGbGbAAJFQAAJGmbGbQmcGbpFAAQpEAAmcmbQmbmbAApGg");
	this.shape_78.setTransform(320,860);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("rgba(0,0,0,0.051)").ss(12).p("A1oAAQAAo8GVmXQGXmVI8AAQI9AAGXGVQGVGXAAI8QAAI9mVGXQmXGVo9AAQo8AAmXmVQmVmXAAo9g");
	this.shape_79.setTransform(320,860);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(0,0,0,0.051)").ss(12).p("A1VAAQAAo1GQmQQGQmQI1AAQI2AAGQGQQGQGQAAI1QAAI2mQGQQmQGQo2AAQo1AAmQmQQmQmQAAo2g");
	this.shape_80.setTransform(320,860);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("rgba(0,0,0,0.051)").ss(12).p("A1CAAQAAosGLmLQGKmLItAAQIuAAGKGLQGLGLAAIsQAAItmLGLQmKGLouAAQotAAmKmLQmLmLAAotg");
	this.shape_81.setTransform(320,860);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("rgba(0,0,0,0.055)").ss(12).p("A0uAAQAAolGFmEQGEmFIlAAQImAAGEGFQGFGEAAIlQAAImmFGEQmEGFomAAQolAAmEmFQmFmEAAomg");
	this.shape_82.setTransform(320,860);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(0,0,0,0.055)").ss(12).p("A0aAAQAAocF/l/QF/l/IcAAQIdAAF/F/QF/F/AAIcQAAIdl/F/Ql/F/odAAQocAAl/l/Ql/l/AAodg");
	this.shape_83.setTransform(320,860);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("rgba(0,0,0,0.059)").ss(12).p("A0GAAQAAoUF5l5QF5l5IUAAQIVAAF5F5QF5F5AAIUQAAIVl5F5Ql5F5oVAAQoUAAl5l5Ql5l5AAoVg");
	this.shape_84.setTransform(320,860);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("rgba(0,0,0,0.059)").ss(12).p("AzyAAQAAoMFzlzQFzlzIMAAQINAAFzFzQFzFzAAIMQAAINlzFzQlzFzoNAAQoMAAlzlzQlzlzAAoNg");
	this.shape_85.setTransform(320,860);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(0,0,0,0.059)").ss(12).p("AzdAAQAAoDFtltQFtltIDAAQIEAAFtFtQFtFtAAIDQAAIEltFtQltFtoEAAQoDAAltltQltltAAoEg");
	this.shape_86.setTransform(320,860);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("rgba(0,0,0,0.063)").ss(12).p("AzIAAQAAn6FnlnQFnlnH6AAQH7AAFnFnQFnFnAAH6QAAH7lnFnQlnFnn7AAQn6AAlnlnQlnlnAAn7g");
	this.shape_87.setTransform(320,860);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(0,0,0,0.063)").ss(12).p("AyzAAQAAnxFhlhQFhlgHxAAQHyAAFhFgQFgFhAAHxQAAHylgFhQlhFgnyAAQnxAAlhlgQlhlhAAnyg");
	this.shape_88.setTransform(320,860);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("rgba(0,0,0,0.063)").ss(12).p("AydAAQAAnpFalaQFalaHpAAQHqAAFaFaQFaFaAAHpQAAHqlaFaQlaFanqAAQnpAAlalaQlalaAAnqg");
	this.shape_89.setTransform(320,860);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("rgba(0,0,0,0.067)").ss(12).p("AyIAAQAAngFUlUQFUlUHgAAQHhAAFUFUQFUFUAAHgQAAHhlUFUQlUFUnhAAQngAAlUlUQlUlUAAnhg");
	this.shape_90.setTransform(320,860);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("rgba(0,0,0,0.067)").ss(12).p("AxyAAQAAnXFOlNQFOlNHWAAQHXAAFOFNQFNFNAAHXQAAHYlNFNQlOFNnXAAQnWAAlOlNQlOlNAAnYg");
	this.shape_91.setTransform(320,860);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(0,0,0,0.071)").ss(12).p("AxbAAQAAnNFHlHQFHlHHNAAQHOAAFHFHQFHFHAAHNQAAHOlHFHQlHFHnOAAQnNAAlHlHQlHlHAAnOg");
	this.shape_92.setTransform(320,860);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(0,0,0,0.071)").ss(12).p("AxFAAQAAnEFBlAQFAlAHEAAQHFAAFAFAQFAFAAAHEQAAHFlAFAQlAFAnFAAQnEAAlAlAQlBlAAAnFg");
	this.shape_93.setTransform(320,860);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("rgba(0,0,0,0.071)").ss(12).p("AwuAAQAAm6E6k6QE6k6G6AAQG7AAE6E6QE6E6AAG6QAAG7k6E6Qk6E6m7AAQm6AAk6k6Qk6k6AAm7g");
	this.shape_94.setTransform(320,860);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(0,0,0,0.075)").ss(12).p("AwXAAQAAmxEzkzQEzkzGxAAQGyAAEzEzQEzEzAAGxQAAGykzEzQkzEzmyAAQmxAAkzkzQkzkzAAmyg");
	this.shape_95.setTransform(320,860);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,0,0,0.075)").ss(12).p("AwAAAQAAmnEsktQEtksGnAAQGoAAEtEsQEsEtAAGnQAAGoksEtQktEsmoAAQmnAAktksQksktAAmog");
	this.shape_96.setTransform(320,860);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("rgba(0,0,0,0.078)").ss(12).p("AvoAAQAAmeElklQElklGeAAQGfAAElElQElElAAGeQAAGfklElQklElmfAAQmeAAklklQklklAAmfg");
	this.shape_97.setTransform(320,860);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("rgba(0,0,0,0.078)").ss(12).p("AvRAAQAAmUEfkeQEekeGUAAQGVAAEeEeQEfEeAAGUQAAGVkfEeQkeEemVAAQmUAAkekeQkfkeAAmVg");
	this.shape_98.setTransform(320,860);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("rgba(0,0,0,0.078)").ss(12).p("Au5AAQAAmKEYkXQEXkXGKAAQGLAAEXEXQEXEXAAGKQAAGLkXEXQkXEXmLAAQmKAAkXkXQkYkXAAmLg");
	this.shape_99.setTransform(320,860);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(0,0,0,0.082)").ss(12).p("AugAAQAAmAEQkQQEQkQGAAAQGBAAEQEQQEQEQAAGAQAAGBkQEQQkQEQmBAAQmAAAkQkQQkQkQAAmBg");
	this.shape_100.setTransform(320,860);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("rgba(0,0,0,0.082)").ss(12).p("AuIAAQAAl2EJkJQEJkJF2AAQF3AAEJEJQEJEJAAF2QAAF3kJEJQkJEJl3AAQl2AAkJkJQkJkJAAl3g");
	this.shape_101.setTransform(320,860);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(0,0,0,0.086)").ss(12).p("AtvAAQAAlsECkBQEBkCFsAAQFtAAEBECQECEBAAFsQAAFtkCEBQkBECltAAQlsAAkBkCQkCkBAAltg");
	this.shape_102.setTransform(320,860);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(0,0,0,0.086)").ss(12).p("AtWAAQAAlhD6j7QD7j6FhAAQFiAAD7D6QD6D7AAFhQAAFij6D7Qj7D6liAAQlhAAj7j6Qj6j7AAlig");
	this.shape_103.setTransform(320,860);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("rgba(0,0,0,0.09)").ss(12).p("As9AAQAAlWD0j0QDzjzFWAAQFXAADzDzQD0D0AAFWQAAFXj0D0QjzDzlXAAQlWAAjzjzQj0j0AAlXg");
	this.shape_104.setTransform(320,860);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("rgba(0,0,0,0.09)").ss(12).p("AsjAAQAAlMDsjrQDrjsFMAAQFNAADrDsQDsDrAAFMQAAFNjsDrQjrDslNAAQlMAAjrjsQjsjrAAlNg");
	this.shape_105.setTransform(320,860);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(0,0,0,0.094)").ss(12).p("AsKAAQAAlBDkjlQDljjFBAAQFCAADlDjQDjDlAAFBQAAFCjjDlQjlDjlCAAQlBAAjljjQjkjlAAlCg");
	this.shape_106.setTransform(320,860);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("rgba(0,0,0,0.094)").ss(12).p("ArwAAQAAk3DdjcQDdjcE2AAQE3AADdDcQDdDcAAE3QAAE4jdDcQjdDck3AAQk2AAjdjcQjdjcAAk4g");
	this.shape_107.setTransform(320,860);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("rgba(0,0,0,0.098)").ss(12).p("ArVAAQAAksDVjUQDUjVEsAAQEtAADUDVQDVDUAAEsQAAEtjVDUQjUDVktAAQksAAjUjVQjVjUAAktg");
	this.shape_108.setTransform(320,860);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("rgba(0,0,0,0.098)").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_109.setTransform(320,860);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4}]}).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[]},1).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(424,1212,432,432);




(lib.bgimage = function() {
	this.initialize(img.bgimage);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,640,1140);


(lib.clouds = function() {
	this.initialize();

	// yun
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("Egx6AFeQAADwCRDcQCNDVDlB6QDwCAECgRQEcgTDzjFQA+C+C/CNQC1CGD0A0QD5A0Dog1QD9g5CoipQC0DhEpBTQEWBNEyg/QExhADmi3QD2jEBXkXQEcB2D6gHQDygHC3h8QC1h8BjjgQBljnAAk3QAAiuhqjaQhujgixiqQjEi9jdg+Qj9hGj3BtQiAk8lTi7QkviomGgaQl3gZkpBwQk1B2hYDeQj9jWlagSQk5gRk3CQQkuCMi6DrQjED4AHEGQiDg4ilAcQilAdiRBqQibBxhaCtQhjC+AADrg");
	this.shape.setTransform(319.5,168.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AGTZmQkqhTiyjhQiqCpj8A5QjoA1j5g0Qj0g0i1iGQi+iNg/i+QjzDFkcATQkCARjwiAQjlh6iNjVQiQjcgBjwQABjrBii+QBaitCbhxQCRhqCmgdQCkgcCEA4QgIkGDEj4QC7jrEtiMQE3iQE5ARQFaASD+DWQBXjeE1h2QEphwF3AZQGGAaEvCoQFSC7CBE8QD3htD8BGQDeA+DEC9QCwCqBuDgQBqDaAACuQAAE3hlDnQhiDgi1B8Qi3B8jyAHQj6AHkdh2QhWEXj2DEQjmC3kxBAQiKAdiEAAQihAAiZgrg");
	this.shape_1.setTransform(319.5,168.1);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,-2,643,340.2);






(lib.shadow = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0.082,1],0,0,0,0,0,113.5).s().p("AshCTQlMg9gBhWQABhVFMg+QFMg9HVAAQHVAAFNA9QFMA+AABVQAABWlMA9QlNA+nVAAQnVAAlMg+g");
	this.shape.setTransform(113.5,21);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,227,41.9);


(lib.Waterpipe01 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("AgTgxQgkAAgaAXQgdAaAtAXQApAXA3AHQAcAEAUgBIAOhvg");
	this.shape.setTransform(-32.7,105.5,1.05,1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAfA1Qg3gHgpgXQgtgXAdgaQAagXAkAAIBwgGIgOBvIgIAAQgRAAgXgDg");
	this.shape_1.setTransform(-32.7,105.5,1.05,1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("ABgArQAJg6gEhUQgDhNgIgaQgIgYhSAPQhSAQAAAhQAAAXgKCGQgKCEAAAaQAAAkBOAUQBLAVAMgbQASgnAPh5g");
	this.shape_2.setTransform(-39.7,105.1,1.05,1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYDRQhOgUAAgkQAAgaAKiEQAKiGAAgXQAAghBSgQQBSgPAIAYQAIAaADBNQAEBUgJA6QgPB5gSAnQgHAPgcAAQgVAAgfgJg");
	this.shape_3.setTransform(-39.7,105.1,1.05,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(4,1,1).p("Ah8gFIBcAIQBlAHA4gK");
	this.shape_4.setTransform(20.3,119.7,1.05,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AggADIhcgIID4AFQgiAGg1AAQggAAglgDg");
	this.shape_5.setTransform(20.3,119.7,1.05,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1,1).p("AkLgZIAUAJQAcAKAlAHQB1AbCjgCQBUgBAzgNQAagGAJgG");
	this.shape_6.setTransform(14.1,104.1,1.05,1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ai2ABQglgHgcgKIgUgJIIXAZQgJAGgaAGQgzANhUABIgWAAQiVAAhtgZg");
	this.shape_7.setTransform(14.1,104.1,1.05,1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4,1,1).p("AixjjIieBhIgKChICUCxIFiAUICtiqIAQiRIiFh4g");
	this.shape_8.setTransform(12.8,110,1.05,1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AjFDQIiUixIAKihICehhIGGAUICFB4IgQCRIitCqg");
	this.shape_9.setTransform(12.8,110,1.05,1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4,1,1).p("AiuifIgCC7IgcAeQgTAkAuAbQAzAeCAAIQCEAHAtgdQAqgbgOgfIgXgZIAKjT");
	this.shape_10.setTransform(10.6,147,1.05,1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AACCfQiAgIgzgeQgugbATgkIAcgeIACi7IFwACIgKDTIAXAZQAOAfgqAbQgjAXhbAAIgzgBg");
	this.shape_11.setTransform(10.6,147,1.05,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4,1,1).p("AEIg1Qh0BdihANQiZALhhhA");
	this.shape_12.setTransform(22.8,-157.6,1.05,1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AkHAAIIPg1Qh0BdihANQgWABgVAAQh8AAhTg2g");
	this.shape_13.setTransform(22.8,-157.6,1.05,1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(4,1,1).p("Ah2zSQg5CTguD4QhdHvA4HyQAcD3AqE3QAXDrgXELQBSAsClgSQBUgJBDgRQAOhagBitQgBlZhImcQhDmAAvmKQAlk4Bxlc");
	this.shape_14.setTransform(14.6,-32.2,1.05,1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("Ai8S+QAXkLgXjrQgqk3gcj3Qg4nyBdnvQAuj4A5iTIGOgKQhxFcglE4QgvGKBDGAQBIGcABFZQABCtgOBaQhDARhUAJQgwAFgmAAQhnAAg6gfg");
	this.shape_15.setTransform(14.6,-32.2,1.05,1);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-52.5,-165.1,105.2,330.2);

(lib.Waterpipe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.Waterpipe01("synched",0);
	this.instance.setTransform(48.2,0.1,1,1,0,0,0,0,-163.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-163.2,scaleX:1.1,scaleY:0.94,y:0},10).to({regY:-163.1,scaleX:1,scaleY:1,y:0.1},4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-4.4,-1.9,105.2,330.2);


// stage content:



(lib.bg = function(mode,startPosition,loop) {

	// BACKGROUND
	this.instance_3 = new lib.bgimage();
	this.instance_3.setTransform(0,-2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(318.5,315,643,1391.1);

(lib.bg2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// // WATER PIPE
	// this.instance = new lib.Waterpipe();
	// this.instance.setTransform(305.5,172.1,1,1,0,0,0,48.1,163.2);

	this.instance_1 = new lib.clouds();
	this.instance_1.setTransform(320,-82.9,1,1,0,0,0,319.5,168.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(120));

	// SHADOW
	this.instance_2 = new lib.shadow();
	this.instance_2.setTransform(320,742.6,1,1,0,0,0,113.5,20.9);
	this.instance_2.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120));


}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(318.5,315,643,1391.1);


(lib.lamp = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(255,255,255,0.498)","#F5E13F","#DBC01F"],[0.09,0.733,1],0,0,0,0,0,1100).s().p("EgGeBtLMAENhbxMgTsBZwQmZhTmKiEMAb0hXlMgqQBRnQl2i9lajjMAxjhNZMg97BD4Qk5kWkTk2MBD4g97MhNZAxjQjklYi9l4MBRngqQMhXmAb1QiEmKhTmaMBZwgTtMhbyAEOQgMjZAAjJQAAjBAMjbMBbyAENMhZxgTsQBTmYCEmMMBXnAb2MhRpgqSQC8l2DllbMBNbAxlMhD6g99QERk2E6kWMA9+BD6MgxlhNcQFgjoFwi5MAqSBRrMgb2hXqQGMiEGYhTMATtBZ0MgENhb1QDXgNDHAAQDJAADXANMgEOBb1MATthZ0QGVBTGPCFMgb2BXpMAqShRrQF3C9FZDkMgxkBNcMA99hD6QE4EVEUE3MhD6A99MBNbgxkQDlFbC7F1MhRpAqSMBXogb2QCCGIBUGbMhZzATtMBb0gENQAMDOAADOQAADWgMDMMhb0gEOMBZyATtQhTGXiEGNMhXmgb1MBRnAqQQi7F1jmFbMhNYgxjMBD3A97QkUE3k4EVMg96hD4MAxiBNYQleDnlyC5MgqQhRmMAb1BXlQmMCEmYBTMgTshZwMAEOBbxQjPAMjRAAQjQAAjOgMgAglhaIgXAOIgTATIgOAXIgIAZIAAAYIAIAaIAPAXIASASIAXANIAaAHIAYAAIAZgHIAXgNIASgSIANgXIAFgaIAAgYIgFgZIgMgXIgTgTIgXgOIgZgGIgYAAg");
	this.shape.setTransform(700,700);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1400,1400);


// stage content:
(lib.lampMovie = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.lamp();
	this.instance.setTransform(320.1,568,1,1,0,0,0,700,700);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},479).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,436,1400,1400);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:




// symbols:



(lib.stem = function() {
	this.initialize();

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(20,1).p("ABtkmQg4BrhBCyQhHC7gZB1");

	// 图层 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(32,1).p("ABtkmQg4BrhBCyQgdBLgVBBQgfBegPBG");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-26.9,-45.5,54,91);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LU1
	// leftleg_fill
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(20,1).p("AgTk5QAUCNAMCvQANDMgNBq");
	this.shape.setTransform(97,262.3,1,1,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(20,1).p("AgLE5QgPhtANjCQAGhfAHhSQAJhOALhE");
	this.shape_1.setTransform(97.1,262.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(20,1).p("AgLE5QgQhyAMi8QAGhfAJhTQAJhQAMhC");
	this.shape_2.setTransform(97.2,262.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FFFFFF").ss(20,1).p("AgKE5QgSh4AMi2QAHhdAJhVQAJhRANhB");
	this.shape_3.setTransform(97.2,262.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#FFFFFF").ss(20,1).p("AgJE5QgUh9AMixQAGhcALhWQAJhSANhA");
	this.shape_4.setTransform(97.3,262.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#FFFFFF").ss(20,1).p("AgJE5QgViCAMirQAGhcAMhWQAJhUAOg/");
	this.shape_5.setTransform(97.4,262.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FFFFFF").ss(20,1).p("AgIE5QgWiHALilQAGhcANhXQAKhWAOg9");
	this.shape_6.setTransform(97.4,262.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFFFFF").ss(20,1).p("AgHE5QgYiMALigQAGhbANhYQAKhXAPg8");
	this.shape_7.setTransform(97.5,262.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FFFFFF").ss(20,1).p("AgGE5QgaiRALibQAGhaAOhZQALhYAPg7");
	this.shape_8.setTransform(97.6,262.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#FFFFFF").ss(20,1).p("AgZk5QAQA6AMBZQAOBeAGBVQAKCWgbCW");
	this.shape_9.setTransform(97.6,262.3,1,1,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#FFFFFF").ss(20,1).p("AgHE5QgYiNALifQAGhbANhYQALhXAPg8");
	this.shape_10.setTransform(97.5,262.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(20,1).p("AgIE5QgWiEALipQAHhcALhWQAKhVAOg+");
	this.shape_11.setTransform(97.4,262.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#FFFFFF").ss(20,1).p("AgKE5QgSh7AMizQAGhdAKhVQAJhSANhA");
	this.shape_12.setTransform(97.3,262.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#FFFFFF").ss(20,1).p("AgLE5QgQhxANi+QAGheAIhTQAJhPAMhD");
	this.shape_13.setTransform(97.1,262.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// RU1
	//rightleg_fill
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#FFFFFF").ss(20,1).p("AgTk5QAUCNAMCvQANDMgNBq");
	this.shape_14.setTransform(139.5,262.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#FFFFFF").ss(20,1).p("AgTk5QALBFAIBRQAIBQAGBWQANDKgPBs");
	this.shape_15.setTransform(139.6,262.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#FFFFFF").ss(20,1).p("AgUk5QAMBEAIBRQAKBRAFBVQANDGgQBx");
	this.shape_16.setTransform(139.6,262.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(20,1).p("AgUk5QAMBCAJBTQAKBRAGBUQAMDCgSB2");
	this.shape_17.setTransform(139.7,262.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(20,1).p("AgVk5QANBBAJBUQAKBSAGBTQAMC9gTB7");
	this.shape_18.setTransform(139.8,262.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#FFFFFF").ss(20,1).p("AgWk5QAOBAAKBUQALBTAGBSQAMC4gVCB");
	this.shape_19.setTransform(139.8,262.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#FFFFFF").ss(20,1).p("AgXk5QAPA+AKBWQALBTAGBSQAMCzgWCG");
	this.shape_20.setTransform(139.9,262.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#FFFFFF").ss(20,1).p("AgXk5QAPA9AKBXQAMBUAHBRQALCtgYCM");
	this.shape_21.setTransform(140,262.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#FFFFFF").ss(20,1).p("AgYk5QAPA7AMBYQAMBVAGBRQAMCogaCR");
	this.shape_22.setTransform(140.1,262.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(20,1).p("AgZk5QAQA6AMBZQAOBeAGBVQAKCWgbCW");
	this.shape_23.setTransform(140.2,262.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#FFFFFF").ss(20,1).p("AgXk5QAPA8ALBXQAMBVAGBRQALCtgYCM");
	this.shape_24.setTransform(140,262.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(20,1).p("AgWk5QAOA/AKBVQALBTAGBSQAMC2gWCD");
	this.shape_25.setTransform(139.9,262.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#FFFFFF").ss(20,1).p("AgVk5QANBCAJBTQAKBRAGBUQAMC+gSB6");
	this.shape_26.setTransform(139.7,262.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#FFFFFF").ss(20,1).p("AgUk5QAMBEAIBSQAJBQAGBVQANDHgQBw");
	this.shape_27.setTransform(139.6,262.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14}]}).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_14}]},1).wait(1));

	// head
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(6,1,1).p("AretMIlyE3IgyBuIEdR5IBuB6ILsAzIMdg3IBkg0IENyqIgZh+IlYk3IhdgzI0NAAg");
	this.shape_28.setTransform(115.6,89.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("Ar3NMIhth6Ikex5IAyhuIFyk2ICGgzIUNAAIBdAzIFYE3IAZB/IkNSoIhkA1IsdA2g");
	this.shape_29.setTransform(115.6,89.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(6,1,1).p("AyHmmIAyhtIF3k0ICGgyIUNgDIBdAyIFdE3IAZB/IkPSpIhlA1IscAzIrugvIhvh2g");
	this.shape_30.setTransform(115.6,89.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ar1NOIhwh2Ikix9IAzhuIF2k0ICGgyIUNgDIBcAyIFeE4IAZB+IkPSpIhkA0IsdA0g");
	this.shape_31.setTransform(115.6,89.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(6,1,1).p("AyLmkIAyhuIF7kxICGgyIUNgGIBdAzIFhE3IAZB+IkQSpIhlA1IsdAxIrugtIhxhyg");
	this.shape_32.setTransform(115.6,89.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("Ar0NPIhxhyIklyBIAxhuIF7kxICGgyIUNgGIBcAzIFhE3IAZB+IkPSpIhlA1IsdAxg");
	this.shape_33.setTransform(115.6,89.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(6,1,1).p("AyPmjIAyhtIF/kvICGgyIUNgIIBdAyIFlE3IAZB/IkRSpIhlA0IscAuIrxgqIhyhtg");
	this.shape_34.setTransform(115.6,89.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AryNQIhzhtIkqyGIAyhtIF/kvICGgyIUNgIIBcAyIFmE3IAZB/IkSSpIhkA0IsdAug");
	this.shape_35.setTransform(115.6,89.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(6,1,1).p("AyTmhIAyhuIGDkrICGgyIUNgMIBdAzIFpE3IAZB+IkTSpIhkA1IsdArIrygnIhzhpg");
	this.shape_36.setTransform(115.6,88.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AryNSIhzhpIkuyKIAyhuIGDkrICGgyIUNgMIBcAzIFqE3IAZB+IkSSpIhlA1IsdArg");
	this.shape_37.setTransform(115.6,88.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(6,1,1).p("AyYmgIAyhtIGIkpICGgyIUNgOIBdAyIFuE3IAZB/IkUSpIhlA0IseAoIrygkIh1hkg");
	this.shape_38.setTransform(115.6,88.8);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("ArwNTIh1hkIkzyPIAzhtIGHkpICGgyIUNgOIBcAyIFvE3IAZB/IkVSpIhkA0IsfAog");
	this.shape_39.setTransform(115.6,88.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(6,1,1).p("AycmfIAyhtIGMkmICGgyIUNgRIBdAyIFyE3IAZB/IkWSpIhkA1IsfAlIrygiIh3hgg");
	this.shape_40.setTransform(115.6,88.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("ArvNVIh2hhIk2ySIAxhuIGMkmICGgyIUNgRIBcAyIFyE4IAZB+IkVSpIhlA0IseAmg");
	this.shape_41.setTransform(115.6,88.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(6,1,1).p("AresuImQEjIgyBuIE7SXIB4BcIL0AfIMfgjIBkg0IEXyqIgZh+Il2k3IhdgzI0NAUg");
	this.shape_42.setTransform(115.6,88.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("ArtNWIh3hcIk8yXIAyhuIGQkjICGgxIUNgVIBdAzIF2E3IAZB/IkXSoIhkA1IsfAjg");
	this.shape_43.setTransform(115.6,88.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28}]}).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_43},{t:this.shape_42}]},1).to({state:[{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_37},{t:this.shape_36}]},1).to({state:[{t:this.shape_35},{t:this.shape_34}]},1).to({state:[{t:this.shape_33},{t:this.shape_32}]},1).to({state:[{t:this.shape_31},{t:this.shape_30}]},1).to({state:[{t:this.shape_29},{t:this.shape_28}]},1).wait(1));

	// body
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("ACfIJQgQgFgmgQQgmgRgTgGQgggKgVAAQgSAAgRAGQgKACgXALQgiARgYAIQgnALgtAAQg4AAglglQgpgqgKheQgHg+ADiuIABhuQABhwAGg7QAKhiAehEQBTjDD0AAQCaAABbBiQB/CIgXEwQgFBBADCQQADB2gGAuQgKBIgkAmQglAmg9AAQgXAAgegJgABzG3QBLAfAWAAQAvAAAUglQASgeADhFQABgcgDh4QgChsAGhKQATkHhhh2QhLhciJAAQjWAAhBCuQgYBCgHBkQgCAjgCCGQgDEDAGA0QAPBvBFAAQA2AAA6gcQA6gbAoAAQAsAABMAgg");
	this.shape_44.setTransform(118.3,200.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AByG3QhLgggtAAQgoAAg6AbQg5Acg2AAQhGAAgOhvQgHg0AEkDQABiGADgjQAGhkAZhCQBAiuDWAAQCKAABKBcQBhB2gTEHQgFBKACBsQACB4gBAcQgDBFgRAeQgVAlgvAAQgWAAhLgfg");
	this.shape_45.setTransform(118.4,200.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AByG3QhLgggtAAQgoAAg6AbQg5Acg2AAQhGAAgOhvQgHg0AEkDQABiHADgiQAGhkAZhBQBAivDWAAQCKAABKBcQBhB2gTEHQgFBKACBsQACB4gBAcQgDBFgRAeQgVAlgvAAQgWAAhLgfg");
	this.shape_46.setTransform(118.4,200.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ACfIJQgQgFgmgRQgmgQgTgFQgggLgVAAQgSAAgRAFQgKAEgXALQgiAQgYAIQgnALgtAAQg4AAglglQgpgqgKheQgHg+ADivIABhtQABhxAGg6QAKhiAehFQBTjCD0AAQCaAABbBjQB/CHgXEwQgFBBADCQQADB2gGAuQgKBJgkAkQglAng9AAQgXAAgegJgABzG3QBLAfAWAAQAvAAAUglQASgeADhFQABgcgDh4QgChsAGhKQATkHhhh2QhLhciJAAQjWAAhBCvQgYBBgHBkQgCAigCCHQgDEDAGA0QAPBvBFAAQA2AAA6gcQA6gbAoAAQAsAABMAgg");
	this.shape_47.setTransform(118.3,200.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AByG3QhLgggtAAQgoAAg6AbQg5Acg2AAQhGAAgOhvQgHg0AEkDQABiHADgiQAGhkAZhCQBAiuDWAAQCKAABKBcQBhB2gTEHQgFBKACBsQACB4gBAcQgDBFgRAeQgVAlgvAAQgWAAhLgfg");
	this.shape_48.setTransform(118.4,200.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("ACfIJQgQgFgmgRQgmgQgTgGQgggKgVAAQgSAAgRAFQgKAEgXALQgiAQgYAIQgnALgtAAQg4AAglglQgpgqgKheQgHg+ADivIABhtQABhxAGg6QAKhiAehEQBTjDD0AAQCaAABbBjQB/CHgXEwQgFBBADCQQADB2gGAuQgKBIgkAmQglAmg9AAQgXAAgegJgABzG3QBLAfAWAAQAvAAAUglQASgeADhFQABgcgDh4QgChsAGhKQATkHhhh2QhLhciJAAQjWAAhBCuQgYBCgHBkQgCAigCCHQgDEDAGA0QAPBvBFAAQA2AAA6gcQA6gbAoAAQAsAABMAgg");
	this.shape_49.setTransform(118.3,200.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AByG2QhLgfgtAAQgoAAg6AcQg5Abg2AAQhGAAgOhvQgHg0AEkDQABiHADgiQAGhkAZhBQBAivDWAAQCKAABKBbQBhB3gTEHQgFBKACBsQACB4gBAcQgDBEgRAgQgVAkgvAAQgWAAhLggg");
	this.shape_50.setTransform(118.4,200.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("ACfIIQgQgFgmgQQgmgQgTgFQgggLgVAAQgSAAgRAFQgKADgXAMQgiAQgYAHQgnAMgtAAQg4AAglglQgpgqgKhfQgHg9ADivIABhtQABhwAGg6QAKhjAehFQBTjCD0AAQCaAABbBjQB/CHgXEwQgFBBADCRQADB1gGAuQgKBIgkAlQglAng9AAQgXAAgegKgABzG2QBLAgAWAAQAvAAAUgkQASggADhEQABgcgDh4QgChsAGhKQATkHhhh3QhLhbiJAAQjWAAhBCvQgYBBgHBkQgCAigCCHQgDEDAGA0QAPBvBFAAQA2AAA6gbQA6gcAoAAQAsAABMAfg");
	this.shape_51.setTransform(118.3,200.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AByG2QhLgfgtAAQgoAAg6AbQg5Acg2AAQhGAAgOhvQgHg0AEkDQABiHADgiQAGhkAZhBQBAivDWAAQCKAABKBcQBhB2gTEHQgFBKACBsQACB4gBAcQgDBFgRAfQgVAkgvAAQgWAAhLggg");
	this.shape_52.setTransform(118.4,200.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("ACfIJQgQgGgmgQQgmgQgTgFQgggLgVAAQgSAAgRAFQgKADgXAMQgiAQgYAHQgnAMgtAAQg4AAglglQgpgqgKhfQgHg9ADivIABhtQABhxAGg5QAKhjAehFQBTjCD0AAQCaAABbBjQB/CHgXEwQgFBBADCQQADB2gGAuQgKBJgkAkQglAng9AAQgXAAgegJgABzG2QBLAgAWAAQAvAAAUgkQASgfADhFQABgcgDh4QgChsAGhKQATkHhhh2QhLhciJAAQjWAAhBCvQgYBBgHBkQgCAigCCHQgDEDAGA0QAPBvBFAAQA2AAA6gcQA6gbAoAAQAsAABMAfg");
	this.shape_53.setTransform(118.3,200.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("ACfIJQgQgFgmgRQgmgQgTgFQgggLgVAAQgSAAgRAFQgKAEgXALQgiAQgYAIQgnALgtAAQg4AAglglQgpgqgKheQgHg+ADivIABhtQABhxAGg5QAKhjAehFQBTjCD0AAQCaAABbBjQB/CHgXEwQgFBBADCQQADB2gGAuQgKBJgkAkQglAng9AAQgXAAgegJgABzG3QBLAfAWAAQAvAAAUglQASgeADhFQABgcgDh4QgChsAGhKQATkHhhh2QhLhciJAAQjWAAhBCvQgYBBgHBkQgCAigCCHQgDEDAGA0QAPBvBFAAQA2AAA6gcQA6gbAoAAQAsAABMAgg");
	this.shape_54.setTransform(118.3,201);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("ACfIJQgQgFgmgRQgmgQgTgGQgggKgVAAQgSAAgRAFQgKAEgXAKQgiARgYAIQgnALgtAAQg4AAglglQgpgqgKheQgHg+ADivIABhtQABhxAGg6QAKhiAehEQBTjDD0AAQCaAABbBjQB/CHgXEwQgFBBADCQQADB2gGAuQgKBIgkAmQglAmg9AAQgXAAgegJgABzG3QBLAfAWAAQAvAAAUglQASgeADhFQABgcgDh4QgChsAGhKQATkHhhh2QhLhciJAAQjWAAhBCuQgYBCgHBkQgCAigCCHQgDEDAGA0QAPBvBFAAQA2AAA6gcQA6gbAoAAQAsAABMAgg");
	this.shape_55.setTransform(118.3,201.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AByG2QhLgfgtAAQgoAAg6AcQg5Abg2AAQhGAAgOhvQgHg0AEkDQABiHADgiQAGhkAZhBQBAivDWAAQCKAABKBcQBhB2gTEHQgFBKACBsQACB4gBAcQgDBFgRAfQgVAkgvAAQgWAAhLggg");
	this.shape_56.setTransform(118.4,201.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("ACfIJQgQgGgmgQQgmgQgTgFQgggLgVAAQgSAAgRAFQgKADgXAMQgiAQgYAHQgnAMgtAAQg4AAglglQgpgqgKhfQgHg9ADivIABhtQABhxAGg5QAKhjAehFQBTjCD0AAQCaAABbBjQB/CHgXEwQgFBBADCQQADB2gGAuQgKBJgkAkQglAng9AAQgXAAgegJgABzG2QBLAgAWAAQAvAAAUgkQASgfADhFQABgcgDh4QgChsAGhKQATkHhhh2QhLhciJAAQjWAAhBCvQgYBBgHBkQgCAigCCHQgDEDAGA0QAPBvBFAAQA2AAA6gbQA6gcAoAAQAsAABMAfg");
	this.shape_57.setTransform(118.3,201.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AByG2QhLgfgtAAQgoAAg6AcQg5Abg2AAQhGAAgOhvQgHg0AEkDQABiGADgjQAGhkAZhCQBAiuDWAAQCKAABKBbQBhB3gTEHQgFBKACBsQACB4gBAcQgDBEgRAgQgVAkgvAAQgWAAhLggg");
	this.shape_58.setTransform(118.4,201);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("ACfIIQgQgEgmgQQgmgQgTgHQgggKgVAAQgSAAgRAGQgKADgXAKQgiARgYAHQgnAMgtAAQg4AAglglQgpgqgKhfQgHg9ADiuIABhuQABhwAGg6QAKhjAehFQBTjCD0AAQCaAABbBiQB/CIgXEvQgFBCADCRQADB1gGAuQgKBJgkAkQglAng9AAQgXAAgegKgABzG2QBLAgAWAAQAvAAAUgkQASggADhEQABgcgDh4QgChsAGhKQATkHhhh3QhLhbiJAAQjWAAhBCuQgYBCgHBkQgCAjgCCGQgDEDAGA0QAPBvBFAAQA2AAA6gbQA6gcAoAAQAsAABMAfg");
	this.shape_59.setTransform(118.3,201);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AByG3QhLgggtAAQgoAAg6AbQg5Acg2AAQhGAAgOhvQgHg0AEkDQABiGADgjQAGhkAZhCQBAiuDWAAQCKAABKBbQBhB3gTEHQgFBKACBsQACB4gBAcQgDBFgRAeQgVAlgvAAQgWAAhLgfg");
	this.shape_60.setTransform(118.4,200.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("ACfIIQgQgEgmgQQgmgRgTgGQgggKgVAAQgSAAgRAGQgKACgXALQgiARgYAIQgnALgtAAQg4AAglglQgpgqgKheQgHg+ADiuIABhuQABhwAGg7QAKhiAehEQBTjDD0AAQCaAABbBiQB/CIgXEvQgFBCADCQQADB2gGAuQgKBIgkAmQglAmg9AAQgXAAgegKgABzG3QBLAfAWAAQAvAAAUglQASgeADhFQABgcgDh4QgChsAGhKQATkHhhh3QhLhbiJAAQjWAAhBCuQgYBCgHBkQgCAjgCCGQgDEDAGA0QAPBvBFAAQA2AAA6gcQA6gbAoAAQAsAABMAgg");
	this.shape_61.setTransform(118.3,200.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_45,p:{y:200.4}},{t:this.shape_44,p:{y:200.4}}]}).to({state:[{t:this.shape_47},{t:this.shape_46,p:{y:200.5}}]},1).to({state:[{t:this.shape_49},{t:this.shape_48,p:{y:200.6}}]},1).to({state:[{t:this.shape_51,p:{y:200.8}},{t:this.shape_50,p:{y:200.8}}]},1).to({state:[{t:this.shape_53},{t:this.shape_52}]},1).to({state:[{t:this.shape_54},{t:this.shape_46,p:{y:201}}]},1).to({state:[{t:this.shape_55},{t:this.shape_48,p:{y:201.1}}]},1).to({state:[{t:this.shape_51,p:{y:201.2}},{t:this.shape_50,p:{y:201.2}}]},1).to({state:[{t:this.shape_57},{t:this.shape_56}]},1).to({state:[{t:this.shape_45,p:{y:201.4}},{t:this.shape_44,p:{y:201.4}}]},1).to({state:[{t:this.shape_51,p:{y:201.2}},{t:this.shape_50,p:{y:201.2}}]},1).to({state:[{t:this.shape_59},{t:this.shape_58}]},1).to({state:[{t:this.shape_61},{t:this.shape_60}]},1).to({state:[{t:this.shape_49},{t:this.shape_48,p:{y:200.6}}]},1).to({state:[{t:this.shape_45,p:{y:200.4}},{t:this.shape_44,p:{y:200.4}}]},1).wait(1));

	// right hand
	this.instance = new lib.stem("synched",0);
	this.instance.setTransform(143.7,176.7,1,1,0,0,180,11,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-29.4,skewX:1.8,skewY:181.8,x:145.2,y:176.8},7).to({regY:-29.5,skewX:0,skewY:180,x:143.7,y:176.7},7).wait(1));

	// left hand
	this.instance_1 = new lib.stem("synched",0);
	this.instance_1.setTransform(92.7,176.7,1,1,0,0,0,11,-29.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:2},7).to({rotation:0},7).wait(1));

	// RL2
	//left leg
	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(32,1).p("AgTk5QAUCNAMCvQANDMgNBq");
	this.shape_62.setTransform(97,262.3,1,1,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(32,1).p("AgLE5QgPhtANjCQAGhfAHhSQAJhOALhE");
	this.shape_63.setTransform(97.1,262.3);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(32,1).p("AgLE5QgQhyAMi8QAGhfAJhTQAJhQAMhC");
	this.shape_64.setTransform(97.2,262.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(32,1).p("AgKE5QgSh4AMi2QAHhdAJhVQAJhRANhB");
	this.shape_65.setTransform(97.2,262.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(32,1).p("AgJE5QgUh9AMixQAGhcALhWQAJhSANhA");
	this.shape_66.setTransform(97.3,262.3);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(32,1).p("AgJE5QgViCAMirQAGhcAMhWQAJhUAOg/");
	this.shape_67.setTransform(97.4,262.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(32,1).p("AgIE5QgWiHALilQAGhcANhXQAKhWAOg9");
	this.shape_68.setTransform(97.4,262.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(32,1).p("AgHE5QgYiMALigQAGhbANhYQAKhXAPg8");
	this.shape_69.setTransform(97.5,262.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(32,1).p("AgGE5QgaiRALibQAGhaAOhZQALhYAPg7");
	this.shape_70.setTransform(97.6,262.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(32,1).p("AgZk5QAQA6AMBZQAOBeAGBVQAKCWgbCW");
	this.shape_71.setTransform(97.6,262.3,1,1,0,0,180);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(32,1).p("AgHE5QgYiNALifQAGhbANhYQALhXAPg8");
	this.shape_72.setTransform(97.5,262.3);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(32,1).p("AgIE5QgWiEALipQAHhcALhWQAKhVAOg+");
	this.shape_73.setTransform(97.4,262.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(32,1).p("AgKE5QgSh7AMizQAGhdAKhVQAJhSANhA");
	this.shape_74.setTransform(97.3,262.3);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(32,1).p("AgLE5QgQhxANi+QAGheAIhTQAJhPAMhD");
	this.shape_75.setTransform(97.1,262.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_62}]}).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_62}]},1).wait(1));

	// RD2
	//right leg
	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(32,1).p("AgTk5QAUCNAMCvQANDMgNBq");
	this.shape_76.setTransform(139.5,262.3);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(32,1).p("AgTk5QALBFAIBRQAIBQAGBWQANDKgPBs");
	this.shape_77.setTransform(139.6,262.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(32,1).p("AgUk5QAMBEAIBRQAKBRAFBVQANDGgQBx");
	this.shape_78.setTransform(139.6,262.3);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(32,1).p("AgUk5QAMBCAJBTQAKBRAGBUQAMDCgSB2");
	this.shape_79.setTransform(139.7,262.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(32,1).p("AgVk5QANBBAJBUQAKBSAGBTQAMC9gTB7");
	this.shape_80.setTransform(139.8,262.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(32,1).p("AgWk5QAOBAAKBUQALBTAGBSQAMC4gVCB");
	this.shape_81.setTransform(139.8,262.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(32,1).p("AgXk5QAPA+AKBWQALBTAGBSQAMCzgWCG");
	this.shape_82.setTransform(139.9,262.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(32,1).p("AgXk5QAPA9AKBXQAMBUAHBRQALCtgYCM");
	this.shape_83.setTransform(140,262.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(32,1).p("AgYk5QAPA7AMBYQAMBVAGBRQAMCogaCR");
	this.shape_84.setTransform(140.1,262.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#000000").ss(32,1).p("AgZk5QAQA6AMBZQAOBeAGBVQAKCWgbCW");
	this.shape_85.setTransform(140.2,262.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#000000").ss(32,1).p("AgXk5QAPA8ALBXQAMBVAGBRQALCtgYCM");
	this.shape_86.setTransform(140,262.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#000000").ss(32,1).p("AgWk5QAOA/AKBVQALBTAGBSQAMC2gWCD");
	this.shape_87.setTransform(139.9,262.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#000000").ss(32,1).p("AgVk5QANBCAJBTQAKBRAGBUQAMC+gSB6");
	this.shape_88.setTransform(139.7,262.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#000000").ss(32,1).p("AgUk5QAMBEAIBSQAJBQAGBVQANDHgQBw");
	this.shape_89.setTransform(139.6,262.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_76}]}).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_76}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-3,237.1,312.7);


// stage content:



(lib.doll = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});




	// FACE
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(4,1,1).p("ACKA5QAAgbgkguQgog1gkgGQgmgGg3AiQg3AjgKAkQgKAjANALQAKAJAdgCQAigDBggF");
	this.shape.setTransform(319.8,586.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(4,1,1).p("AguAYQAGgOAPgKQAdgaArAE");
	this.shape_1.setTransform(291.6,510.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(4,1,1).p("AgpgPIAfgBQAgAFATAc");
	this.shape_2.setTransform(345.4,508.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(7,1,1).p("ADpBWQhwgMicg0Qh0glg4gcQgPgIgHgRIgDgR");
	this.shape_3.setTransform(362.6,538.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(7,1,1).p("AjpB1QBagIC3hUQCwhOALgaQAIgRgBgMIgDgI");
	this.shape_4.setTransform(277,541.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,1).p("AAvg0IhdBp");
	this.shape_5.setTransform(414.9,555.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(4,1).p("ABIhNIiPCb");
	this.shape_6.setTransform(418.5,535.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(6,1).p("AjoilIlIgCQgqAAiPB2QhHA5g/A7IgCAQQgCATAFAPQAPAzBEAAQY7AAAhgJQAegHAOglQAQgqgdggQgYgahghNQhvhbgbgFQgqgJnzAK");
	this.shape_7.setTransform(320.6,467.1);

	// this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(74));

	// BODY
	this.instance = new lib.body();
	this.instance.setTransform(320,598.3,1,1,0,0,0,115.5,159.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(74));





}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(521.5,1003.4,237.1,312.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:




// symbols:


// stage content:
(lib.pulse = function(mode,startPosition,loop) {
    loop = false;
	this.initialize(mode,startPosition,loop,{});

    // this.paused = true;
    this.stop();

    this.rebegan = function(){
        // this.paused = false;
        this.play()
        // this.frame_0 = function() {
            createjs.Sound.play("music", createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
        // }
    }
	// timeline functions:
	

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1072));

	// Rhythm3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#33CCFF").ss(28).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape.setTransform(320,860);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(57,159,193,0.667)").ss(22.7).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_1.setTransform(320,860);
	this.shape_1._off = true;

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(62,113,130,0.333)").ss(17.4).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_2.setTransform(320,860);
	this.shape_2._off = true;

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(68,68,68,0)").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_3.setTransform(320,860);
	this.shape_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(104).to({_off:false},0).to({_off:true},1).wait(119).to({_off:false},0).to({_off:true},1).wait(105).to({_off:false},0).to({_off:true},1).wait(103).to({_off:false},0).to({_off:true},1).wait(96).to({_off:false},0).to({_off:true},1).wait(95).to({_off:false},0).to({_off:true},1).wait(91).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(72).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(105).to({_off:false},0).to({_off:true},1).wait(119).to({_off:false},0).to({_off:true},1).wait(105).to({_off:false},0).to({_off:true},1).wait(103).to({_off:false},0).to({_off:true},1).wait(96).to({_off:false},0).to({_off:true},1).wait(95).to({_off:false},0).to({_off:true},1).wait(91).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(72).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(106).to({_off:false},0).to({_off:true},1).wait(119).to({_off:false},0).to({_off:true},1).wait(105).to({_off:false},0).to({_off:true},1).wait(103).to({_off:false},0).to({_off:true},1).wait(96).to({_off:false},0).to({_off:true},1).wait(95).to({_off:false},0).to({_off:true},1).wait(91).to({_off:false},0).to({_off:true},1).wait(69).to({_off:false},0).to({_off:true},1).wait(72).to({_off:false},0).to({_off:true},1).wait(71).to({_off:false},0).to({_off:true},1).wait(57).to({_off:false},0).to({_off:true},1).wait(55).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(107).to({_off:false},0).wait(116).to({_off:true},1).wait(3).to({_off:false},0).to({_off:true},103).wait(3).to({_off:false},0).to({_off:true},101).wait(3).to({_off:false},0).to({_off:true},94).wait(3).to({_off:false},0).to({_off:true},93).wait(3).to({_off:false},0).to({_off:true},89).wait(3).to({_off:false},0).to({_off:true},67).wait(3).to({_off:false},0).to({_off:true},70).wait(3).to({_off:false},0).to({_off:true},69).wait(3).to({_off:false},0).to({_off:true},55).wait(3).to({_off:false},0).to({_off:true},53).wait(3).to({_off:false},0).to({_off:true},1).wait(20));

	// Rhythm2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0)").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_4.setTransform(320,860,3,3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggsAAAQAAtiJlplQJmpkNhAAQNiAAJmJkQJkJlAANiQAANjpkJlQpmJktiAAQthAApmpkQplplAAtjg");
	this.shape_5.setTransform(320,860);
	this.shape_5._off = true;

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggWAAAQAAtYJepgQJfpeNZAAQNaAAJfJeQJeJgAANYQAANZpeJgQpfJetaAAQtZAApfpeQpepgAAtZg");
	this.shape_6.setTransform(320,860);
	this.shape_6._off = true;

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/yAAQAAtKJUpUQJUpUNKAAQNLAAJUJUQJUJUAANKQAANLpUJUQpUJUtLAAQtKAApUpUQpUpUAAtLg");
	this.shape_7.setTransform(320,860);
	this.shape_7._off = true;

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/AAAQAAs1JFpGQJGpFM1AAQM2AAJFJFQJGJGAAM1QAAM2pGJFQpFJGs2AAQs1AApGpGQpFpFAAs2g");
	this.shape_8.setTransform(320,860);
	this.shape_8._off = true;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A+AAAQAAsbIzoyQIyozMbAAQMcAAIyIzQIzIyAAMbQAAMcozIyQoyIzscAAQsbAAoyozQozoyAAscg");
	this.shape_9.setTransform(320,860);
	this.shape_9._off = true;

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8yAAQAAr6IcobQIcocL6AAQL7AAIcIcQIcIbAAL6QAAL7ocIbQocIcr7AAQr6AAococQocobAAr7g");
	this.shape_10.setTransform(320,860);
	this.shape_10._off = true;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("rgba(0,0,0,0.024)").ss(12).p("A7VAAQAArUIBoAQIAoBLUAAQLVAAIAIBQIBIAAALUQAALVoBIAQoAIBrVAAQrUAAoAoBQoBoAAArVg");
	this.shape_11.setTransform(320,860);
	this.shape_11._off = true;

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.031)").ss(12).p("A5qAAQAAqnHinhQHhniKnAAQKoAAHhHiQHiHhAAKnQAAKoniHhQnhHhqoAAQqnAAnhnhQninhAAqog");
	this.shape_12.setTransform(320,860);
	this.shape_12._off = true;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A3wAAQAAp1G9m+QG+m9J1AAQJ2AAG+G9QG9G+AAJ1QAAJ2m9G+Qm+G9p2AAQp1AAm+m9Qm9m+AAp2g");
	this.shape_13.setTransform(320,860);
	this.shape_13._off = true;

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0.051)").ss(12).p("A1oAAQAAo8GVmXQGXmVI8AAQI9AAGXGVQGVGXAAI8QAAI9mVGXQmXGVo9AAQo8AAmXmVQmVmXAAo9g");
	this.shape_14.setTransform(320,860);
	this.shape_14._off = true;

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0.059)").ss(12).p("AzSAAQAAn/FplpQFrlqH+AAQH/AAFqFqQFqFpAAH/QAAIAlqFpQlqFqn/AAQn+AAlrlqQlplpAAoAg");
	this.shape_15.setTransform(320,860);
	this.shape_15._off = true;

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.071)").ss(12).p("AwuAAQAAm6E6k6QE6k6G6AAQG7AAE6E6QE6E6AAG6QAAG7k6E6Qk6E6m7AAQm6AAk6k6Qk6k6AAm7g");
	this.shape_16.setTransform(320,860);
	this.shape_16._off = true;

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0.086)").ss(12).p("At8AAQAAlxEGkFQEFkFFxAAQFyAAEFEFQEGEFAAFxQAAFykGEFQkFEFlyAAQlxAAkFkFQkGkFAAlyg");
	this.shape_17.setTransform(320,860);
	this.shape_17._off = true;

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.098)").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_18.setTransform(320,860);
	this.shape_18._off = true;

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggpAAAQAAthJkpjQJkplNhAAQNiAAJkJlQJkJjAANhQAANipkJjQpkJltiAAQthAApkplQpkpjAAtig");
	this.shape_19.setTransform(320,860);
	this.shape_19._off = true;

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggMAAAQAAtUJcpcQJbpcNVAAQNVAAJcJcQJcJcAANUQAANVpcJcQpcJbtVAAQtVAApbpbQpcpcAAtVg");
	this.shape_20.setTransform(320,860);
	this.shape_20._off = true;

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/bAAQAAtAJNpNQJOpONAAAQNBAAJOJOQJNJNAANAQAANBpNJNQpOJOtBAAQtAAApOpOQpNpNAAtBg");
	this.shape_21.setTransform(320,860);
	this.shape_21._off = true;

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A+XAAQAAskI5o6QI6o5MkAAQMlAAI6I5QI5I6AAMkQAAMlo5I6Qo6I5slAAQskAAo6o5Qo5o6AAslg");
	this.shape_22.setTransform(320,860);
	this.shape_22._off = true;

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A9AAAQAAsAIgofQIgohMAAAQMBAAIgIhQIgIfAAMAQAAMBogIfQogIhsBAAQsAAAogohQogofAAsBg");
	this.shape_23.setTransform(320,860);
	this.shape_23._off = true;

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(0,0,0,0.035)").ss(12).p("A5WAAQAAqfHbnbQHcncKfAAQKgAAHcHcQHbHbAAKfQAAKgnbHbQncHcqgAAQqfAAncncQnbnbAAqgg");
	this.shape_24.setTransform(320,860);
	this.shape_24._off = true;

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(0,0,0,0.043)").ss(12).p("A3FAAQAApjGxmxQGymwJiAAQJjAAGyGwQGxGxAAJjQAAJkmxGxQmyGwpjAAQpiAAmymwQmxmxAApkg");
	this.shape_25.setTransform(320,860);
	this.shape_25._off = true;

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.055)").ss(12).p("A0fAAQAAoeGAmAQGBmBIeAAQIfAAGBGBQGAGAAAIeQAAIfmAGAQmBGBofAAQoeAAmBmBQmAmAAAofg");
	this.shape_26.setTransform(320,860);
	this.shape_26._off = true;

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0.067)").ss(12).p("AxnAAQAAnSFLlKQFLlKHRAAQHSAAFLFKQFLFKAAHSQAAHTlLFKQlLFKnSAAQnRAAlLlKQlLlKAAnTg");
	this.shape_27.setTransform(320,860);
	this.shape_27._off = true;

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.082)").ss(12).p("AuaAAQAAl9EOkOQEPkPF9AAQF+AAEPEPQEOEOAAF9QAAF+kOEOQkPEPl+AAQl9AAkPkPQkOkOAAl+g");
	this.shape_28.setTransform(320,860);
	this.shape_28._off = true;

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggnAAAQAAtgJjpkQJkpjNgAAQNgAAJkJjQJkJkAANgQAANhpkJkQpkJjtgAAQtgAApkpjQpjpkAAthg");
	this.shape_29.setTransform(320,860);
	this.shape_29._off = true;

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("EggEAAAQAAtSJZpZQJZpZNSAAQNTAAJZJZQJZJZAANSQAANTpZJZQpZJZtTAAQtSAApZpZQpZpZAAtTg");
	this.shape_30.setTransform(320,860);
	this.shape_30._off = true;

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0.008)").ss(12).p("A/LAAQAAs6JJpIQJJpJM5AAQM6AAJJJJQJJJIAAM6QAAM7pJJIQpJJIs6AAQs5AApJpIQpJpIAAs7g");
	this.shape_31.setTransform(320,860);
	this.shape_31._off = true;

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.012)").ss(12).p("A96AAQAAsYIxowQIxoyMYAAQMZAAIwIyQIyIwAAMYQAAMZoyIwQowIysZAAQsYAAoxoyQoxowAAsZg");
	this.shape_32.setTransform(320,860);
	this.shape_32._off = true;

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8SAAQAArtIToSQISoTLtAAQLuAAISITQITISAALtQAALuoTISQoSISruAAQrtAAoSoSQoToSAArug");
	this.shape_33.setTransform(320,860);
	this.shape_33._off = true;

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.027)").ss(12).p("A6SAAQAAq4HtntQHtntK4AAQK5AAHtHtQHtHtAAK4QAAK5ntHtQntHtq5AAQq4AAntntQntntAAq5g");
	this.shape_34.setTransform(320,860);
	this.shape_34._off = true;

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A38AAQAAp6HBnAQHBnBJ6AAQJ7AAHAHBQHCHAAAJ6QAAJ7nCHAQnAHBp7AAQp6AAnBnBQnBnAAAp7g");
	this.shape_35.setTransform(320,860);
	this.shape_35._off = true;

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.051)").ss(12).p("A1OAAQAAoxGOmPQGOmOIyAAQIzAAGOGOQGOGPAAIxQAAIymOGPQmOGOozAAQoyAAmOmOQmOmPAAoyg");
	this.shape_36.setTransform(320,860);
	this.shape_36._off = true;

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("rgba(0,0,0,0.067)").ss(12).p("AyKAAQAAngFVlVQFVlUHgAAQHhAAFVFUQFVFVAAHgQAAHhlVFVQlVFUnhAAQngAAlVlUQlVlVAAnhg");
	this.shape_37.setTransform(320,860);
	this.shape_37._off = true;

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.082)").ss(12).p("AuuAAQAAmFEVkVQEUkTGFAAQGGAAEUETQEVEVAAGFQAAGGkVEVQkUETmGAAQmFAAkUkTQkVkVAAmGg");
	this.shape_38.setTransform(320,860);
	this.shape_38._off = true;

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EgghAAAQAAtdJhpiQJipiNeAAQNfAAJiJiQJhJiAANdQAANephJiQpiJitfAAQteAApipiQphpiAAteg");
	this.shape_39.setTransform(320,860);
	this.shape_39._off = true;

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.004)").ss(12).p("A/uAAQAAtIJTpTQJTpTNIAAQNJAAJTJTQJTJTAANIQAANJpTJTQpTJStJAAQtIAApTpSQpTpTAAtJg");
	this.shape_40.setTransform(320,860);
	this.shape_40._off = true;

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(0,0,0,0.02)").ss(12).p("A8eAAQAAryIWoWQIWoWLyAAQLzAAIWIWQIWIWAALyQAALzoWIWQoWIWrzAAQryAAoWoWQoWoWAArzg");
	this.shape_41.setTransform(320,860);
	this.shape_41._off = true;

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("rgba(0,0,0,0.031)").ss(12).p("A6DAAQAAqyHpnoQHonoKyAAQKzAAHoHoQHpHoAAKyQAAKznpHoQnoHoqzAAQqyAAnonoQnpnoAAqzg");
	this.shape_42.setTransform(320,860);
	this.shape_42._off = true;

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(0,0,0,0.059)").ss(12).p("AzkAAQAAoFFvlwQFwluIFAAQIGAAFwFuQFvFwAAIFQAAIGlvFwQlwFuoGAAQoFAAlwluQlvlwAAoGg");
	this.shape_43.setTransform(320,860);
	this.shape_43._off = true;

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0.078)").ss(12).p("AvhAAQAAmaEjkjQEkkjGaAAQGbAAEkEjQEiEjAAGaQAAGbkiEjQkkEjmbAAQmaAAkkkjQkjkjAAmbg");
	this.shape_44.setTransform(320,860);
	this.shape_44._off = true;

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(0,0,0,0)").ss(12).p("EggdAAAQAAtcJhpgQJgpgNcAAQNdAAJgJgQJgJgAANcQAANdpgJgQpgJgtdAAQtcAApgpgQphpgAAtdg");
	this.shape_45.setTransform(320,860);
	this.shape_45._off = true;

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0.016)").ss(12).p("A9uAAQAAsTItouQIuosMTAAQMUAAIuIsQItIuAAMTQAAMUotIuQouIssUAAQsTAAouosQotouAAsUg");
	this.shape_46.setTransform(320,860);
	this.shape_46._off = true;

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(0,0,0,0.039)").ss(12).p("A4QAAQAAqCHHnHQHHnGKCAAQKDAAHHHGQHHHHAAKCQAAKDnHHHQnHHGqDAAQqCAAnHnGQnHnHAAqDg");
	this.shape_47.setTransform(320,860);
	this.shape_47._off = true;

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.075)").ss(12).p("AwDAAQAAmpEuktQEsksGpAAQGqAAEsEsQEuEtAAGpQAAGqkuEtQksEsmqAAQmpAAksksQkuktAAmqg");
	this.shape_48.setTransform(320,860);
	this.shape_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(22));
	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(845));
	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(2).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(844));
	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(3).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(843));
	this.timeline.addTween(cjs.Tween.get(this.shape_8).wait(4).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(842));
	this.timeline.addTween(cjs.Tween.get(this.shape_9).wait(5).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(841));
	this.timeline.addTween(cjs.Tween.get(this.shape_10).wait(6).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(840));
	this.timeline.addTween(cjs.Tween.get(this.shape_11).wait(7).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(13).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(362).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(7).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(8).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(838));
	this.timeline.addTween(cjs.Tween.get(this.shape_13).wait(9).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(837));
	this.timeline.addTween(cjs.Tween.get(this.shape_14).wait(10).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(836));
	this.timeline.addTween(cjs.Tween.get(this.shape_15).wait(11).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(835));
	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(12).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(834));
	this.timeline.addTween(cjs.Tween.get(this.shape_17).wait(13).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(833));
	this.timeline.addTween(cjs.Tween.get(this.shape_18).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(14).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(16));
	this.timeline.addTween(cjs.Tween.get(this.shape_19).wait(241).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(635));
	this.timeline.addTween(cjs.Tween.get(this.shape_20).wait(242).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(507).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(21));
	this.timeline.addTween(cjs.Tween.get(this.shape_21).wait(243).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(363).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(134));
	this.timeline.addTween(cjs.Tween.get(this.shape_22).wait(244).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(203).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(152).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(20));
	this.timeline.addTween(cjs.Tween.get(this.shape_23).wait(245).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(631));
	this.timeline.addTween(cjs.Tween.get(this.shape_24).wait(247).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(629));
	this.timeline.addTween(cjs.Tween.get(this.shape_25).wait(248).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(202).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(151).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(18));
	this.timeline.addTween(cjs.Tween.get(this.shape_26).wait(249).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(361).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(130));
	this.timeline.addTween(cjs.Tween.get(this.shape_27).wait(250).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(503).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(6).to({_off:false},0).to({_off:true},1).wait(17));
	this.timeline.addTween(cjs.Tween.get(this.shape_28).wait(251).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(12).to({_off:false},0).to({_off:true},1).wait(625));
	this.timeline.addTween(cjs.Tween.get(this.shape_29).wait(449).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(442));
	this.timeline.addTween(cjs.Tween.get(this.shape_30).wait(450).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(441));
	this.timeline.addTween(cjs.Tween.get(this.shape_31).wait(451).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(440));
	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(452).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(439));
	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(453).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(438));
	this.timeline.addTween(cjs.Tween.get(this.shape_34).wait(454).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(437));
	this.timeline.addTween(cjs.Tween.get(this.shape_35).wait(455).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(436));
	this.timeline.addTween(cjs.Tween.get(this.shape_36).wait(456).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(435));
	this.timeline.addTween(cjs.Tween.get(this.shape_37).wait(457).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(434));
	this.timeline.addTween(cjs.Tween.get(this.shape_38).wait(458).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).to({_off:true},1).wait(433));
	this.timeline.addTween(cjs.Tween.get(this.shape_39).wait(641).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(280));
	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(642).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(279));
	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(644).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(277));
	this.timeline.addTween(cjs.Tween.get(this.shape_42).wait(645).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(276));
	this.timeline.addTween(cjs.Tween.get(this.shape_43).wait(647).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(274));
	this.timeline.addTween(cjs.Tween.get(this.shape_44).wait(648).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(9).to({_off:false},0).to({_off:true},1).wait(273));
	this.timeline.addTween(cjs.Tween.get(this.shape_45).wait(801).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(135));
	this.timeline.addTween(cjs.Tween.get(this.shape_46).wait(803).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(133));
	this.timeline.addTween(cjs.Tween.get(this.shape_47).wait(805).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(131));
	this.timeline.addTween(cjs.Tween.get(this.shape_48).wait(807).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(8).to({_off:false},0).to({_off:true},1).wait(129));

	// Rhythm1
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#FFFFFF").ss(12).p("Aq7AAQAAkhDNjNQDNjNEhAAQEiAADNDNQDNDNAAEhQAAEijNDNQjNDNkiAAQkhAAjNjNQjNjNAAkig");
	this.shape_49.setTransform(320,860);

	this.timeline.addTween(cjs.Tween.get(this.shape_49).wait(1072));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(424,1212,432,432);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes



// symbols:


(lib.spilled = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E6E6E6").s().p("AhqDBQgpgMgagcIgBgWQAVgfASggQAXgoARg9IAqAGQgJBBgmAqQgeAjgFAQQAEALAXAGQAFAEADABQAdAHAyAAQA3gDAygKQA2gMACgOQAGgXgzhAQgwg1g/g4QhHg7g1ggIAggmQA2AdBEA/QA+A3A3BMQA0BLgKAoQgTA9htAHQgbADgXAAQg5AAgsgMg");
	this.shape.setTransform(171.6,59.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E6E6E6").s().p("AhdC3QhnghAXhpQAMgtAXgtQADgEACgHQAFgHAAgEQACgGAFgJQACgIAEgFQAIgNAHgPQgCgFgGgEQgJgJgCgLIAkgiQAOALALADQASAFBcALQAlACAcAKQAZAHAkAaIgXArQgtgdgTgFQgbgHgdgBQgKgBgJgCQgHABgJAAIgXgCQgIAAgOABIgMAAIgDABIgKAWQgJAUgGAHQgBAEgEAFQAAADgEAFQgCAGgEAFIgXAwIABAFQADABAHgBIA4AIIAjAEQARAAAEABQAvAGA4AMIgKAnQiFgUhdAAIgDAEQAEAYAKAOQAJATAiAJQAnAGA9gMQAIgDgCgBIAHAAIAIAhQgxAagxAAQgTAAgSgEg");
	this.shape_1.setTransform(137.9,51.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E6E6E6").s().p("AhtCMIgHgfIARgHQADgHAFgQQAFgLAEgLQABgFAFgMIAFgQQATgtAGgTIAFgNQAahfAJgPIACgJIAnANQg8DHgfA2IADAFQAngCAWAFIAVACQA2AFAiAKIgPA2Qhbgnh4AGg");
	this.shape_2.setTransform(106.3,44.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E6E6E6").s().p("AhuCLIgGgeIAQgIQAFgHAEgPQAGgQACgGQADgJAEgJIAEgPQAVguAEgTIAGgMQAaheAJgQIACgJIAmANQg6DFggA3IADAGQAmgBAWADIAWADQA2AFAiAJIgPA3Qhbgnh5AFg");
	this.shape_3.setTransform(82.6,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E6E6E6").s().p("Ag1BTQAFgTAIgVQAEgFACgIQAYg7AHgZQACgJADgaIABgHQACgFACgQIADgLIAHgRIAmAKIgKAhQgaBQgOAkQgDAMgIAaIgJAiQANAZgDAVIgoAOQgOgoAGgXgAAthmIAHgUIgPAxIAIgdgAAthmIAAAAg");
	this.shape_4.setTransform(67.4,35.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E6E6E6").s().p("AiWCgIAgh2IgEgDQgEABgMgDIgPgBIAMgzQAaAHAJAAIADgCIAXhWIAmAKQgVBOACAEIABADQAiAFA4gEQBMgJADgYQAFgPgxgcQghgSgjgKQhRgTg7AIIACg3QA8gCA2ANQAvANBAAkQBQAugMAtQgHArhnANQgaADgYAAQggAEgigCIgEAEQgeByABAMg");
	this.shape_5.setTransform(50.9,26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E6E6E6").s().p("Ag5C3QhEgNgohAIAsgbQASApBNAUQAcAGAKgMQAVADhhhIQgLgKgDgBIg7grQg0guAJgkQARhBBxgfQBlgfA/ARQArAOAZAyIgoAhQgFgBgKgPQgbgdgMgBQgrgOhTAVQhXAUgKAiQAAAUAvAiQAQAJAqAcQgMgIAuAjQA5AygLAoQgKAkgkAKQgLADgOAAQgRAAgTgFg");
	this.shape_6.setTransform(18.3,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(14,0,1).p("AhkBQQgeAjgFAQQAEALAXAGQAFAEADABQAdAHAyAAQA3gDAygKQA2gMACgOQAGgXgzhAQgwg1g/g4QhHg7g1ggIAggmQA2AdBEA/QA+A3A3BMQA0BLgKAoQgTA9htAHQhYAIg/gRQgpgMgagcIgBgWQAVgfASggQAXgoARg9IAqAGQgJBBgmAqg");
	this.shape_7.setTransform(171.6,59.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(14,0,1).p("AhdC3QhnghAXhpQAMgtAXgtQADgEACgHQAFgHAAgEQACgGAFgJQACgIAEgFQAIgNAHgPQgCgFgGgEQgJgJgCgLIAkgiQAOALALADQASAFBcALQAlACAcAKQAZAHAkAaIgXArQgtgdgTgFQgbgHgdgBQgKgBgJgCQgHABgJAAQgNgCgKAAQgIAAgOABIgMAAIgDABIgKAWQgJAUgGAHQgBAEgEAFQAAADgEAFQgCAGgEAFIgXAwIABAFQADABAHgBQAWACAiAGIAjAEQARAAAEABQAvAGA4AMIgKAnQiFgUhdAAIgDAEQAEAYAKAOQAJATAiAJQAnAGA9gMQAIgDgCgBIAHAAIAIAhQhDAjhEgNg");
	this.shape_8.setTransform(137.9,51.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(14,0,1).p("AhjBlQAEgFAEgRQAFgLAEgLQABgFAGgMIAEgQQAUgtAFgTIAGgNQAZhfAJgPIACgJIAnANQg7DHggA1IAEAGQAmgCAWAEIAVAEQA2AEAiAJIgOA3Qhcgnh4AGIgHgfg");
	this.shape_9.setTransform(106.3,44.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(14,0,1).p("AhkBlQAFgHAEgPQAGgQACgGQADgJAEgIIAEgQQAVgtAEgUIAGgNQAahdAIgQIADgJIAmANQg6DFggA3IADAGQAmgCAWAFIAVADQA2AEAjAJIgPA3Qhbgnh5AGIgGgfg");
	this.shape_10.setTransform(82.6,38.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(14,0,1).p("AAthmQgaBQgOAkQgDAMgIAaIgJAiQANAZgDAVIgoAOQgOgoAGgXQAFgTAIgVQAEgFACgIQAYg7AHgZQACgJADgaIABgHQACgFACgQIADgLIAHgRIAmAKQgGAUgEANQgTBCAahWQgDALgEAJg");
	this.shape_11.setTransform(67.4,35.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(14,0,1).p("AgbifQAvANBAAkQBQAugMAtQgHArhnANQgaADgYAAQggAEgigCIgEAEQgeByABAMIgrgMIAgh2IgEgDQgEABgMgDIgPgBIAMgzQAaAHAJAAIADgCIAXhWIAmAKQgVBOACAEIABADQAiAFA4gEQBMgJADgYQAFgPgxgcQghgSgjgKQhRgTg7AIIACg3QA8gCA2ANg");
	this.shape_12.setTransform(50.9,26);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(14,0,1).p("Ai0hHQARhBBxgfQBlgfA/ARQArAOAZAyIgoAhQgFgBgKgPQgbgdgMgBQgrgOhTAVQhXAUgKAiQAAAUAvAiQAQAJAqAcQgKgHAhAZQAGAEAFAFQA5AygLAoQgKAkgkAKQgbAHgigJQhEgNgohAIAsgbQASApBNAUQAcAGAKgMQAVADhhhIQgLgKgDgBIg7grQg0guAJgkg");
	this.shape_13.setTransform(18.3,18.9);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-7,203.1,94.2);


(lib.perfect = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF3800").s().p("Ah3CjQAAgKgEgDQgEggAFgRQAMguAbg3IAqhTQhPgggognIAcggQBKAvBlAbQA8AQA6gDIgCArQhQADhPgWQAAAEgEAFIgbA1QgGAJgCAEQgWAtgKAmQgHAqALAxIgsANQABgNgJgLg");
	this.shape.setTransform(208.9,68.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF3800").s().p("AgiCJQg+gRgkgbQg4glAPg2QAOg0A4gYQArgWBCgEQAugCBEADQADgEAFgKIAZglIAYAaQgZAfgVBQIgngLIANglQg7gJhPAYQhjAbgMAnQAAAfCPAsQAnAKBQAIIgEAjQgaADgZAAQgzAAgugOg");
	this.shape_1.setTransform(172.1,65.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF3800").s().p("AhdC3QhnggAXhqQAMgtAXgtQADgDACgIQAFgHAAgEIAHgPQADgJADgEQAJgNAGgPQgCgFgGgEQgJgJgCgLIAkgiQAQAMAJACQASAFBcALQAnADAaAJQAaAHAjAbIgXAqQgtgdgTgFQgbgHgdgBQgOgBgFgCQgEACgMgBIgXgCIgWABIgMAAIgDABIgKAWQgJAUgGAHQgBAEgEAFQAAADgEAFIgGALIgXAwIABAFQADABAHgBIBbAMQATAAACABQAvAGA4AMIgKAnQiLgUhXAAIgDAEQAEAXAKAPQAKATAhAJQApAGA7gMQAIgEgCAAIAHAAIAIAiQgxAZgxAAQgTAAgSgEg");
	this.shape_2.setTransform(142.5,53.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF3800").s().p("AiUCZIAjiDIgDgGIgOgBQgLgDgDACIAOgyIANADIATADIAZhFIAmANQgIAVgJAjIAEADIAnAIIAjAIIAnAIIgMArQgogNhPgHIgDACQgKAbgGApIgEAQQgIAogGAUgAh3hyIADgyQBOgGB4AfIAgAGQAbAHAIAAIgQAzQhjgfiZgIg");
	this.shape_3.setTransform(115.8,44.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF3800").s().p("ABkC2QgigJgsgrQgxg+hRgRIAHgzQBgAKBGgfQBCgbAKgmQAAgigugMQhTgShMAeQghBHgLAfQgKAZgIAgQgSBbgJAjIgsgHQAIg5AIgdQADgVAUhIIAdhmIAYgIIABgCQADgLANgOQAfgZBDgBQBzgGA1AuQAcAWgMAtQgNAwhMAmQg7AcgoAGIgBAFIAhAeQAnAqAdANQAPADAMgFIAZgLIANAoQgWAagbAAQgLAAgLgEg");
	this.shape_4.setTransform(79.3,35.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF3800").s().p("AhdC3QhnggAXhpQAMguAXgtQADgDACgIIAGgLQABgFAFgKQACgJAEgEQAIgNAHgOQgCgFgGgFQgJgKgCgKIAkgiQAQAMAJACQAZAHBVAJQAnADAaAJQAbAIAiAaIgXAqQgrgcgVgGQgegIgaAAQgKAAgJgCQgFABgLgBIgXgCIgWACIgMgBIgDACIgKAVQgIASgHAKIgFAIQAAADgEAFQgCAHgEAEIgXAwIABAFIAKAAIBbAMIAVABQAqAFA9AOIgKAmQiDgThfgBIgDAEQAEAYAKAOQAJAUAiAJQAqAFA6gMQAIgEgCAAIAHAAIAIAiQgxAZgxAAQgTAAgSgEg");
	this.shape_5.setTransform(45.7,27.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF3800").s().p("AiWCgIAgh1IgEgEQgGABgKgDIgPgBIAMgzQAbAHAIAAIADgCIAXhWIAmALQgVBMACAGIABACQAiAGA4gFQBMgJADgXQAFgQgxgcQghgSgjgKQhPgTg9AIIACg3QA8gBA2AMQAyAOA9AjQBQAugMAtQgIArhmANQgaADgYAAQgfAEgjgCIgEAEQgeBzABALg");
	this.shape_6.setTransform(15.4,17.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(14,0,1).p("Ah3CjQAAgKgEgDQgEggAFgRQANguAag3IArhTQhQgggognIAcggQBKAvBlAbQA9AQA5gDIgCArQhPADhQgWQAAAEgEAFIgaA1QgHAJgCAEQgVAtgLAmQgHAqAMAxIgtANQABgNgJgLg");
	this.shape_7.setTransform(208.9,68.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(14,0,1).p("AgiCJQg+gRgkgbQg4glAPg2QAOg0A4gYQArgWBCgEQAugCBEADQADgEAFgKQAUgfAFgGIAYAaQgZAfgVBQIgngLIANglQg7gJhPAYQhjAbgMAnQAAAfCPAsQAnAKBQAIIgEAjQhPAKhFgVg");
	this.shape_8.setTransform(172.1,65.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(14,0,1).p("AhdC3QhnggAXhqQAMgtAXgtQADgDACgIQAFgHAAgEIAHgPQADgJADgEQAJgNAGgPQgCgFgGgEQgJgJgCgLIAkgiQAQAMAJACQASAFBcALQAnADAaAJQAaAHAjAbIgXAqQgtgdgTgFQgbgHgdgBQgOgBgFgCQgEACgMgBQgNgCgKAAQgOAAgIABQgKAAgCAAIgDABIgKAWQgJAUgGAHQgBAEgEAFQAAADgEAFQgCAGgEAFQgJATgOAdIABAFQADABAHgBIBbAMQATAAACABQAvAGA4AMIgKAnQiLgUhXAAIgDAEQAEAXAKAPQAKATAhAJQApAGA7gMQAIgEgCAAIAHAAIAIAiQhEAihDgNg");
	this.shape_9.setTransform(142.5,53.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(14,0,1).p("ABSiLIAgAGQAbAHAIAAIgQAzQhjgfiZgIIADgyQBOgGB4AfgAh1ghIATADIAZhFIAmANQgIAVgJAjIAEADIAnAIQAfAHAEABIAnAIIgMArQgogNhPgHIgDACQgKAbgGApIgEAQQgIAogGAUIgtgNIAjiDIgDgGIgOgBQgLgDgDACIAOgyg");
	this.shape_10.setTransform(115.8,44.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(14,0,1).p("ACrCgQgfAkgogOQgigJgsgrQgxg+hRgRIAHgzQBgAKBGgfQBCgbAKgmQAAgigugMQhTgShMAeQghBHgLAfQgKAZgIAgQgSBbgJAjIgsgHQAIg5AIgdQADgVAUhIIAdhmIAYgIIABgCQADgLANgOQAfgZBDgBQBzgGA1AuQAcAWgMAtQgNAwhMAmQg7AcgoAGIgBAFIAhAeQAnAqAdANQAPADAMgFIAZgLg");
	this.shape_11.setTransform(79.3,35.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(14,0,1).p("AhdC3QhnggAXhpQAMguAXgtQADgDACgIIAGgLQABgFAFgKQACgJAEgEQAIgNAHgOQgCgFgGgFQgJgKgCgKIAkgiQAQAMAJACQAZAHBVAJQAnADAaAJQAbAIAiAaIgXAqQgrgcgVgGQgegIgaAAQgKAAgJgCQgFABgLgBQgNgCgKAAIgWACIgMgBIgDACIgKAVQgIASgHAKIgFAIQAAADgEAFQgCAHgEAEIgXAwIABAFQACAAAIAAIBbAMQAPAAAGABQAqAFA9AOIgKAmQiDgThfgBIgDAEQAEAYAKAOQAJAUAiAJQAqAFA6gMQAIgEgCAAQAFAAACAAIAIAiQhFAjhCgOg");
	this.shape_12.setTransform(45.7,27.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(14,0,1).p("AgbifQAyAOA9AjQBQAugMAtQgIArhmANQgaADgYAAQgfAEgjgCIgEAEQgeBzABALIgrgMIAgh1IgEgEQgGABgKgDQgNgBgCAAIAMgzQAbAHAIAAIADgCIAXhWIAmALQgVBMACAGIABACQAiAGA4gFQBMgJADgXQAFgQgxgcQghgSgjgKQhPgTg9AIIACg3QA8gBA2AMg");
	this.shape_13.setTransform(15.4,17.2);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-7,239.1,100.9);


(lib.notfull = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFF00").s().p("AhuCMIgGgfIARgHQAEgIAEgPQAHgPABgGQACgHAFgLIAFgQQASgoAHgYQAFgLAAgCQAahfAJgPIACgJIAmAOQg8DIgeA0IADAGQApgCAUAEQAHACAOAAQAwAEAoALIgOA2Qhcgnh5AGg");
	this.shape.setTransform(211.7,71);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF00").s().p("AhtCMIgHgfIAQgIQAEgFAFgQIAJgXQABgGAGgLIADgQQAUgtAGgTIAFgNQAahfAJgPIACgJIAmANQg7DHgfA1IADAHQAmgCAXADQALADAKABQA1AEAjAJIgOA3Qhcgnh4AGg");
	this.shape_1.setTransform(188,64.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFF00").s().p("AA+CbIAsiLQhbBVg6AkQgzAagrgKQglgIgEgwQgDgYALgrQAOgxAegxQAthEAggeIAlAYQhABTgQATQggAngMAoQgGAZAAAOQAEAYAUAEQApALA7goQAigZBBg7QA8g6AXgFIAQAmIgFALQgOAogPAmIgnBug");
	this.shape_2.setTransform(160.8,54.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("AiUCZIAjiDIgDgGQgEgBgKAAQgLgDgDABIAOgyIANAEQAMAAAHADIABgFIAZhAIAlANQgKAegHAaIAEADQAdAFAKADQAVAEAOAEIAnAIIgMArQgpgOhOgGIgDABQgJAZgHAsIgRBLgAh3hyIADgyQBOgGB4AfQAMADAUADQAaAHAJAAIgQAzQhigfiagIg");
	this.shape_3.setTransform(134.4,46.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("Ah3CjQAAgKgEgDQgEggAFgRQAMguAbg3IAqhTQhPgggognIAcggQBKAvBkAbQA7AQA8gDIgCArQhQADhPgWIgfA+QgIAKAAADQgWAtgKAmQgHAqALAxIgsANQABgNgJgLg");
	this.shape_4.setTransform(96.6,35.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AgtChQg1gOgigfQgmgnAPg5QALgmBEgwQBAgwAlAAIgZgVIAgggQCXBsgbBrQgRBJg7AcQghATgpAAQgXAAgcgHgAAnhKQgkAOgjAUQhFAjgLAlQgHAaAaAeQAWAXAoAKQBuAPAkhhQgChGhOhJg");
	this.shape_5.setTransform(60.9,31.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AAADKQgrgMgkhLQgfhLgDgxIg0B4QgPAdgDAKIg0gOIABgCQATg3AZgvIAig+QASgcAAgDIAQAEQgIhOAEgxIAwgCQAMCoAcBYQAVBRAhAJQAdALAogwQAcgqAhhGQAshpgXhZIA8gXQAdB9hFCCQglBSgsAnQgpAlgnAAQgNAAgNgFg");
	this.shape_6.setTransform(23.6,20.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(14,0,1).p("AhjBmQAEgHAEgPQAHgQABgGQACgHAFgLIAFgQQASgoAHgYQAFgLAAgCQAahfAJgPIACgJIAmANQg8DKgeAzIADAGQApgCAUAEQAHACAOABQAwAEAoAKIgOA2Qhcgnh5AGIgGgfg");
	this.shape_7.setTransform(211.7,71);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(14,0,1).p("AhjBlQAEgGAEgPIAJgXQABgGAGgLIAEgQQAUgtAFgTIAGgNQAZhfAJgPIACgJIAnANQg7DHggA1IAEAHQAlgDAXAEQALADAKABQA2AEAiAJIgOA3Qhcgnh4AGIgHgfg");
	this.shape_8.setTransform(188,64.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(14,0,1).p("AgrCIQgzAbgrgLQglgHgEgwQgDgYALgrQAOgxAegyQAthDAggfIAlAZQhABTgQATQggAngMAnQgGAaAAAOQAEAXAUAFQApALA7goQAigZBBg8QA8g5AXgFIAQAlQgBACgEAKQgOAogPAlIgnBvIgtgMIAsiLQhbBVg6Ajg");
	this.shape_9.setTransform(160.8,54.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(14,0,1).p("ABSiLQAMADAUADQAaAHAJAAIgQAzQhigfiagIIADgyQBOgGB4AfgAh1ghQAMAAAHADIABgFIAZhAIAlANQgKAegHAaIAEADQAdAFAKADQAVAEAOAEIAnAIIgMArQgpgOhOgGIgDABQgJAZgHAsIgRBLIgugMIAjiDIgDgGQgEgBgKAAQgLgDgDABIAOgyg");
	this.shape_10.setTransform(134.4,46.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(14,0,1).p("Ah3CjQAAgKgEgDQgEggAFgRQAMguAbg3IAqhTQhPgggognIAcggQBKAvBkAbQA7AQA8gDIgCArQhPADhQgWIgfA+QgIAKAAADQgWAtgKAmQgHAqALAxIgsANQABgNgJgLg");
	this.shape_11.setTransform(96.6,35.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(14,0,1).p("ACcAwQgRBJg7AcQg2AghHgUQg1gOgigfQgmgnAPg5QALgmBEgwQBAgwAlAAIgZgVIAgggQCXBsgbBrgAgggoQhFAjgLAlQgHAaAaAeQAWAXAoAKQBuAPAkhhQgChGhOhJIAEAeQgkAOgjAUg");
	this.shape_12.setTransform(60.9,31.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(14,0,1).p("Ah+i4IAwgCQAMCoAcBYQAVBRAhAJQAdALAogwQAcgqAhhGQAshpgXhZIA8gXQAdB9hFCCQglBSgsAnQg3AxgzgRQgrgMgkhLQgfhLgDgxIg0B4QgPAdgDAKIg0gOIABgCQATg3AZgvIAig+QASgcAAgDIAQAEQgIhOAEgxg");
	this.shape_13.setTransform(23.6,20.7);

	this.addChild(this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-7,237.5,102.3);

(lib.face3 = function(){
    this.initialize();

    // FACE3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(14,1,1).p("AAAgsIAABZ");
	this.shape.setTransform(348,532);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(14,1,1).p("AAAgsIAABZ");
	this.shape_1.setTransform(294,532);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(6,1,1).p("AjHgvICEAlQCOAmBDARQATAFAQgFQAPgEAIgK");
	this.shape_2.setTransform(286,518.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(6,1,1).p("AjYA/QAWAUArgQQAsgQB6grQB3gqBTgn");
	this.shape_3.setTransform(358.7,515.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(6,1,1).p("ABHj1Qg8AUglA1QgmA0gGBGQgMChCXCH");
	this.shape_4.setTransform(325,575.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(4,1,1).p("AHYjvIsXhaICFBuIlAAAIEfCfIiMBTICmA8IkeDwIG7iPIiCCWIKhjw");
	this.shape_5.setTransform(273.2,583.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#92ECFF").s().p("AgkCzIm7CQIEejvIing9ICNhTIkfifIFAAAIiFhtIMXBaIAjFHIqhDwg");
	this.shape_6.setTransform(273.2,583.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(6,1,1).p("AA5leQA4CAggAzQgMAUgeAQQgjASgRAKQhEAmgJBNQgMBxBbDm");
	this.shape_7.setTransform(314.2,447.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(6,1,1).p("ADMBvQhHAWg7AEQhHAEg/gVQhMgZgshfQgRgkgEghQgEggAKgJQAdgZAugBQAugCBDAWQApAOAxAvQAbAbApAs");
	this.shape_8.setTransform(298.9,398.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ag8B4QhMgZgshfQgRgkgEghQgEggAKgJQAdgZAugBQAugCBDAWQApAOAxAvQAbAbApAsIA1BfQhHAWg7AEIgXAAQg5AAg2gRg");
	this.shape_9.setTransform(298.9,398.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(6,1,1).p("AjhggQAzgxAtgVQA/gdBQAGQBMAGBFA0QA/AwAEAmQADAig4AkQg8AnhHgBQg+gBhCgnIg0gn");
	this.shape_10.setTransform(343.1,410.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAqB/Qg+gBhCgnIg0gnIhXhQQAzgxAtgVQA/gdBQAGQBMAGBFA0QA/AwAEAmQADAig4AkQg7AmhGAAIgCAAg");
	this.shape_11.setTransform(343.1,410.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4,1).p("AAvg0IhdBp");
	this.shape_12.setTransform(414.9,555.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(4,1).p("ABIhNIiPCb");
	this.shape_13.setTransform(418.5,535.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(6,1).p("AkailIkWgCQgqAAiPB2IiGB0IgCAQQgCATAFAPQAPAzBEAAQY7AAAhgJQAegHAOglQAQgqgdggQgYgahghNQhvhbgbgFQgqgJnzAK");
	this.shape_14.setTransform(320.6,467.1);
    this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container;


(lib.body3 = function(){
    this.initialize();

    this.instance = new lib.spilled();
	this.instance.setTransform(497.8,327.7,1,1,0,0,0,94.5,40.1);
    // BODY3
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(6,1,1).p("AretMIlyE4IgyBtIEdR5IBuB6ILsAzIMdg3IBkg1IENypIgZh+IlYk3IhdgzI0MAAg");
	this.shape_15.setTransform(320,527.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ar3NMIhuh6Ikdx5IAyhtIFyk4ICGgxIUNAAIBcAyIFZE3IAZB/IkNSpIhlA0IscA2g");
	this.shape_16.setTransform(320,527.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#FFFFFF").ss(20,1).p("AArk5QgEAegoB5QglBsgEBOQgDA+AUBeQAPBFAUBB");
	this.shape_17.setTransform(297.3,700.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#FFFFFF").ss(20,1).p("Agqk5QAEAeAoB5QAlBsAEBOQADA/gUBeQgPBGgUA/");
	this.shape_18.setTransform(346.3,700.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("ACfIIQgQgEgmgQQgmgQgTgHQgggKgVAAQgSAAgRAGQgKACgXALQgiARgYAHQgnAMgtAAQg4AAglglQgpgqgKhfQgHg9ADiuIABhuQABhwAGg7QAKhiAehEQBTjDD0AAQCaAABbBiQB/CIgXEvQgFBCADCRQADB1gGAuQgKBJgkAlQglAmg9AAQgXAAgegKgABzG2QBLAgAWAAQAvAAAUglQASgfADhEQABgcgDh4QgChsAGhKQATkHhhh3QhLhbiJAAQjWAAhBCuQgYBCgHBkQgCAjgCCGQgDEDAGA0QAPBvBFAAQA2AAA6gbQA6gcAoAAQAsAABMAfg");
	this.shape_19.setTransform(322.8,638.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AByG2QhLgfgtAAQgoAAg6AcQg5Abg2AAQhGAAgOhvQgHg0AEkDQABiGADgjQAGhkAZhCQBAiuDWAAQCKAABKBbQBhB3gTEHQgFBKACBsQACB4gBAcQgDBEgRAfQgVAlgvAAQgWAAhLggg");
	this.shape_20.setTransform(322.8,638.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(32,1).p("Agqk5QAEAeAoB5QAlBsAEBOQADA/gUBeQgPBGgUA/");
	this.shape_21.setTransform(346.3,700.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(32,1).p("AArk5QgEAegoB5QglBsgEBOQgDA+AUBeQAPBFAUBB");
	this.shape_22.setTransform(297.3,700.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#FFFFFF").ss(20,1).p("AEjinQi/AjhvAsQjOBShJCt");
	this.shape_23.setTransform(273.8,625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(32,1).p("AEjinQi/AjhvAsQjOBShJCt");
	this.shape_24.setTransform(273.8,625);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#FFFFFF").ss(20,1).p("AkiinQAlAKBlAUQBhAWBDAbQDOBSBJCt");
	this.shape_25.setTransform(375.8,631);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(32,1).p("AkiinQAlAKBlAUQBhAWBDAbQDOBSBJCt");
	this.shape_26.setTransform(375.8,631);

    this.addChild(this.instance,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15);
}).prototype = p = new cjs.Container;


(lib.face2 = function(){
    this.initialize();
    // FACE2
	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(10,1,1).p("AjCCvIGFld");
	this.shape_27.setTransform(365,531);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(10,1,1).p("AjCifIGFE/");
	this.shape_28.setTransform(361,533.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(10,1,1).p("Ai4CbIFxk1");
	this.shape_29.setTransform(281,533);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(10,1,1).p("Ai9ipIF7FT");
	this.shape_30.setTransform(280.5,534.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(6,1,1).p("AnoAAIAPABQARADALgCQCDgOE7gDQFdgDBPAYQAbAIAhAC");
	this.shape_31.setTransform(321.4,584.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(6,1,1).p("AC6ktQghgKgwgCQhegEhBAlQjXB0CKHe");
	this.shape_32.setTransform(326.3,450.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(6,1,1).p("AjGCJQAShJAbgzQAhg+AzgsQA9g0BnALQApAFAeANQAdANADAOQAGAlgWAoQgXAmg1AvQgiAeg4ALQg9AIgZAG");
	this.shape_33.setTransform(359.6,402.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AiZANQAhg+AzgsQA9g0BnALQApAFAeANQAdANADAOQAGAlgWAoQgXAmg1AvQgiAeg4ALQg9AIgZAGIiAAJQAShJAbgzg");
	this.shape_34.setTransform(359.6,402.1);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(6,1,1).p("AiuifQBGgMAwAIQBDAMBAA0QA7AwAcBQQAZBMgUAjQgRAdhDgCQhIgCg3gpQg0glgghGIgVg8");
	this.shape_35.setTransform(358.8,436.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("ABTCnQhIgCg3gpQg0glgghGIgVg8IgZh0QBGgMAwAIQBDAMBAA0QA7AwAcBQQAZBMgUAjQgQAbg8AAIgIAAg");
	this.shape_36.setTransform(358.8,436.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(4,1).p("AAvg0IhdBp");
	this.shape_37.setTransform(414.9,555.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(4,1).p("ABIhNIiPCb");
	this.shape_38.setTransform(418.5,535.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(6,1).p("AjoilIlIgCQgqAAiPB2IiGB0IgCAQQgCATAFAPQAPAzBEAAQY7AAAhgJQAegHAOglQAQgqgdggQgYgahghNQhvhbgbgFQgqgJnzAK");
	this.shape_39.setTransform(320.6,467.1);

    this.addChild(this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27);
}).prototype = p = new cjs.Container;



(lib.body2 = function(){
    this.initialize();

    this.instance_1 = new lib.notfull();
	this.instance_1.setTransform(504.6,331.3,1,1,0,0,0,111.7,44.1);
    	// BODY2
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(6,1,1).p("AretMIlyE4IgyBtIEdR5IBuB6ILsAzIMcg3IBlg1IENypIgZh+IlZk3IhcgzI0NAAg");
	this.shape_40.setTransform(320,527.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("Ar3NMIhth6Ikex5IAyhtIFyk4ICGgxIUNAAIBcAyIFZE3IAZB/IkNSpIhlA0IscA2g");
	this.shape_41.setTransform(320,527.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFFFFF").ss(20,1).p("AhDkxQApBxApC6QArDBAJB3");
	this.shape_42.setTransform(357.5,643.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(32,1).p("AhDkxQApBxApC6QArDBAJB3");
	this.shape_43.setTransform(357.5,643.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFFFFF").ss(20,1).p("AAdk4QgaB1gRC+QgTDGAGB3");
	this.shape_44.setTransform(286.9,644.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(32,1).p("AAdk4QgaB1gRC+QgTDGAGB3");
	this.shape_45.setTransform(286.9,644.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFFFFF").ss(20,1).p("AgTk4QAUCNALCoQAODOgNBv");
	this.shape_46.setTransform(344,700.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFFFFF").ss(20,1).p("AATk5QgTCPgLCnQgODOANBv");
	this.shape_47.setTransform(302.4,700.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("ACfIIQgQgEgmgQQgmgQgTgHQgggKgVAAQgSAAgRAGQgKACgXALQgiARgYAHQgnAMgtAAQg4AAglglQgpgqgKhfQgHg9ADiuIABhuQABhwAGg7QAKhiAehEQBTjDD0AAQCaAABbBiQB/CIgXEvQgFBCADCRQADB1gGAuQgKBJgkAlQglAmg9AAQgXAAgegKgABzG2QBLAgAWAAQAvAAAUglQASgfADhEQABgcgDh4QgChsAGhKQATkHhhh3QhLhbiJAAQjWAAhBCuQgYBCgHBkQgCAjgCCGQgDEDAGA0QAPBvBFAAQA2AAA6gbQA6gcAoAAQAsAABMAfg");
	this.shape_48.setTransform(322.8,638.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AByG2QhLgfgtAAQgoAAg6AcQg5Abg2AAQhGAAgOhvQgHg0AEkDQABiGADgjQAGhkAZhCQBAiuDWAAQCKAABKBbQBhB3gTEHQgFBKACBsQACB4gBAcQgDBEgRAfQgVAlgvAAQgWAAhLggg");
	this.shape_49.setTransform(322.8,638.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(32,1).p("AgTk4QAUCNALCoQAODOgNBv");
	this.shape_50.setTransform(344,700.7);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(32,1).p("AATk5QgTCPgLCnQgODOANBv");
	this.shape_51.setTransform(302.4,700.7);

    this.addChild(this.instance_1,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40);
}).prototype = p = new cjs.Container;


(lib.face1 = function(){
    this.initialize();
    // FACE1


  

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(6,1,1).p("AAAizIAAFn");
	this.shape_52.setTransform(380,552.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(6,1,1).p("AAAi9IAAF7");
	this.shape_53.setTransform(265,554.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(6,1,1).p("AAAj5IAAHz");
	this.shape_54.setTransform(282,562.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(6,1,1).p("AAAjqIAAHV");
	this.shape_55.setTransform(364,559);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(6,1,1).p("AAAjqIAAHV");
	this.shape_56.setTransform(341,570);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(6,1,1).p("AAAjvIAAHf");
	this.shape_57.setTransform(306,570.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(6,1,1).p("AlpkMQBLA5BfAZQBeAYCIAAQCQAACDhRQBVg1AEgCQAvgYApACQBuAFAxBeQAvBcgrBsQgyB7ikBkQjDB4j3AAQkIAAiuhhQivhhgvitQgXhUAXhBQAUg8A0ggQAxgfA+AEQBAAEA2Apg");
	this.shape_58.setTransform(321.9,564.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(14,1,1).p("AAAgOIAAAd");
	this.shape_59.setTransform(275,518);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(6,1,1).p("ABrAzQgHgXgRgZQghgugwgGQgsgFglAhIgcAg");
	this.shape_60.setTransform(369.1,496.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(6,1,1).p("AhqAzIAYgwQAhguAwgGQAsgFAlAhQATARAJAP");
	this.shape_61.setTransform(272.9,496.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(14,1,1).p("AAAgOIAAAd");
	this.shape_62.setTransform(367,518);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(6,1,1).p("AApoAIgZBLQgZBhgPByQgwFnBhF8");
	this.shape_63.setTransform(313.5,430.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(6,1,1).p("AClCtQhKgCg5gPQhDgTg2goQhAgwgLhnQgFgpAGggQAHggAMgFQAkgPAsAOQArANA3AqQAlAaAXA1QANAeAUAz");
	this.shape_64.setTransform(296.5,365.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAiCcQhDgTg2goQhAgwgLhnQgFgpAGggQAHggAMgFQAkgPAsAOQArANA3AqQAlAaAXA1QANAeAUAzIAkB7QhKgCg5gPg");
	this.shape_65.setTransform(296.5,365.3);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(6,1,1).p("AjOBuQAQhGAZgoQAkg7BIgoQBBgmBWAFQBPAFAZAgQAVAagaA+QgcA/g8AnQg1AihLAEIhBgD");
	this.shape_66.setTransform(338.3,369.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AhYCCIh2gUQAQhGAZgoQAkg7BIgoQBBgmBWAFQBPAFAZAgQAVAagaA+QgcA/g8AnQg1AihLAEg");
	this.shape_67.setTransform(338.3,369.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(4,1).p("AAvg0IhdBp");
	this.shape_68.setTransform(416,553.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(4,1).p("ABIhNIiPCb");
	this.shape_69.setTransform(419.6,533.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(6,1).p("AjoilIlIgCQgqAAiPB2IiGB0IgCAQQgCATAFAPQAPAzBEAAQY7AAAhgJQAegHAOglQAQgqgdggQgYgahghNQhvhbgbgFQgqgJnzAK");
	this.shape_70.setTransform(320.6,467);

    this.addChild(this.shape_70,this.shape_69,this.shape_68,this.shape_67,this.shape_66,this.shape_65,this.shape_64,this.shape_63,this.shape_62,this.shape_61,this.shape_60,this.shape_59,this.shape_58,this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52);

}).prototype = p = new cjs.Container;


(lib.body1 = function(){
    this.instance_2 = new lib.perfect();
	this.instance_2.setTransform(499.5,330.3,1,1,0,0,0,112.5,43.4);
    	// BODY1
	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(6,1,1).p("AhTiCQg1AWgUBPQgSBEARA1QAXBDBZgGQA1gDA2gZQCCg9gghxQgRg+g9gbQhIgghdAog");
	this.shape_71.setTransform(383,636.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AidBcQgRg1AShEQAUhPA1gWQBdgoBIAgQA9AbARA+QAgBxiCA9Qg2AZg1ADIgOABQhNAAgVg+g");
	this.shape_72.setTransform(383,636.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(6,1,1).p("AretMIlyE4IgyBtIEdR5IBuB6ILsAzIMcg3IBlg1IENypIgZh+IlZk3IhcgzI0NAAg");
	this.shape_73.setTransform(320,527.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("Ar3NMIhuh6Ikdx5IAyhtIFyk4ICGgxIUNAAIBcAyIFZE3IAZB/IkNSpIhlA0IscA2g");
	this.shape_74.setTransform(320,527.8);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#FFFFFF").ss(20,1).p("AgTk4QAUCNALCoQAODOgNBv");
	this.shape_75.setTransform(343.9,700.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#FFFFFF").ss(20,1).p("AATk5QgTCPgLCnQgODOANBv");
	this.shape_76.setTransform(302.4,700.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("ACfIIQgQgEgmgQQgmgQgTgHQgggKgVAAQgSAAgRAGQgKACgXALQgiARgYAHQgnAMgtAAQg4AAglglQgpgqgKhfQgHg9ADiuIABhuQABhwAGg7QAKhiAehEQBTjDD0AAQCaAABbBiQB/CIgXEvQgFBCADCRQADB1gGAuQgKBJgkAlQglAmg9AAQgXAAgegKgABzG2QBLAgAWAAQAvAAAUglQASgfADhEQABgcgDh4QgChsAGhKQATkHhhh3QhLhbiJAAQjWAAhBCuQgYBCgHBkQgCAjgCCGQgDEDAGA0QAPBvBFAAQA2AAA6gbQA6gcAoAAQAsAABMAfg");
	this.shape_77.setTransform(322.7,638.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AByG2QhLgfgtAAQgoAAg6AcQg5Abg2AAQhGAAgOhvQgHg0AEkDQABiGADgjQAGhkAZhCQBAiuDWAAQCKAABKBbQBhB3gTEHQgFBKACBsQACB4gBAcQgDBEgRAfQgVAlgvAAQgWAAhLggg");
	this.shape_78.setTransform(322.8,638.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(20,1).p("ADDjjQgbAog/A+QhNBLgmAoQiYCUggBa");
	this.shape_79.setTransform(278.8,638.7);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(32,1).p("ADDjjQgbAog/A+QhNBLgmAoQiYCUggBa");
	this.shape_80.setTransform(278.8,638.7);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#FFFFFF").ss(20,1).p("AiGhmQAcApArAWQATAKA3ATQAvANAYAUQAiAbATA1");
	this.shape_81.setTransform(363.5,626.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#000000").ss(32,1).p("AiGhmQAcApArAWQATAKA3ATQAvANAYAUQAiAbATA1");
	this.shape_82.setTransform(363.5,626.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#000000").ss(32,1).p("AgTk4QAUCNALCoQAODOgNBv");
	this.shape_83.setTransform(343.9,700.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#000000").ss(32,1).p("AATk5QgTCPgLCnQgODOANBv");
	this.shape_84.setTransform(302.4,700.6);

    this.addChild(this.instance_2,this.shape_84,this.shape_83,this.shape_82,this.shape_81,this.shape_80,this.shape_79,this.shape_78,this.shape_77,this.shape_76,this.shape_75,this.shape_74,this.shape_73,this.shape_72,this.shape_71);
}).prototype = p = new cjs.Container;



})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:




// symbols:




(lib.stream = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92ECFF").s().p("Am8W+ICXyxIgjBgQgmBWgHgpQgJgqBXuWQAsnLAtnEIEjgHQA+IRA/IhQB9RAAABMQAAA1gthhIgthrIDINTg");
	this.shape.setTransform(44.5,121.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#92ECFF").s().p("AlYW6IBRx0QgMALgOAEQgaAGgJgpQgHgqA9tkQAgmyAgmrIE8ABQCaUfABB5QAAAzgZAEIgagHICDWqg");
	this.shape_1.setTransform(42.5,120.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-25.7,89,294);

(lib.waterClip = function(mode,startPosition,loop){

	this.initialize(mode,startPosition,false,{});
	this.paused = true;
	// WATER-COVER (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_1 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_2 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_3 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_4 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_5 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_6 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_7 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_8 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_9 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_10 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_11 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_12 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_13 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_14 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_15 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_16 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_17 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_18 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_19 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_20 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_21 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_22 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_23 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_24 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_25 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_26 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_27 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_28 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_29 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_30 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_31 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_32 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_33 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_34 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_35 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_36 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_37 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_38 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_39 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_40 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_41 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_42 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_43 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_44 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_45 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_46 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_47 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_48 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_49 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_50 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_51 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_52 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_53 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_54 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_55 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_56 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_57 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_58 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_59 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_60 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_61 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_62 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_63 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_64 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_65 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_66 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_67 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_68 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_69 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_70 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_71 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_72 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");
	var mask_graphics_73 = new cjs.Graphics().p("A4IRvMAAAgjdMAwRAAAMAAAAjdg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:320,y:711}).wait(1).to({graphics:mask_graphics_1,x:320,y:709}).wait(1).to({graphics:mask_graphics_2,x:320,y:707}).wait(1).to({graphics:mask_graphics_3,x:320,y:705}).wait(1).to({graphics:mask_graphics_4,x:320,y:702.9}).wait(1).to({graphics:mask_graphics_5,x:320,y:700.9}).wait(1).to({graphics:mask_graphics_6,x:320,y:698.9}).wait(1).to({graphics:mask_graphics_7,x:320,y:696.9}).wait(1).to({graphics:mask_graphics_8,x:320,y:694.9}).wait(1).to({graphics:mask_graphics_9,x:320,y:692.8}).wait(1).to({graphics:mask_graphics_10,x:320,y:690.8}).wait(1).to({graphics:mask_graphics_11,x:320,y:688.8}).wait(1).to({graphics:mask_graphics_12,x:320,y:686.8}).wait(1).to({graphics:mask_graphics_13,x:320,y:684.8}).wait(1).to({graphics:mask_graphics_14,x:320,y:682.7}).wait(1).to({graphics:mask_graphics_15,x:320,y:680.7}).wait(1).to({graphics:mask_graphics_16,x:320,y:678.7}).wait(1).to({graphics:mask_graphics_17,x:320,y:676.7}).wait(1).to({graphics:mask_graphics_18,x:320,y:674.7}).wait(1).to({graphics:mask_graphics_19,x:320,y:672.6}).wait(1).to({graphics:mask_graphics_20,x:320,y:670.6}).wait(1).to({graphics:mask_graphics_21,x:320,y:668.6}).wait(1).to({graphics:mask_graphics_22,x:320,y:666.6}).wait(1).to({graphics:mask_graphics_23,x:320,y:664.6}).wait(1).to({graphics:mask_graphics_24,x:320,y:662.5}).wait(1).to({graphics:mask_graphics_25,x:320,y:660.5}).wait(1).to({graphics:mask_graphics_26,x:320,y:658.5}).wait(1).to({graphics:mask_graphics_27,x:320,y:656.5}).wait(1).to({graphics:mask_graphics_28,x:320,y:654.4}).wait(1).to({graphics:mask_graphics_29,x:320,y:652.4}).wait(1).to({graphics:mask_graphics_30,x:320,y:650.4}).wait(1).to({graphics:mask_graphics_31,x:320,y:648.4}).wait(1).to({graphics:mask_graphics_32,x:320,y:646.4}).wait(1).to({graphics:mask_graphics_33,x:320,y:644.3}).wait(1).to({graphics:mask_graphics_34,x:320,y:642.3}).wait(1).to({graphics:mask_graphics_35,x:320,y:640.3}).wait(1).to({graphics:mask_graphics_36,x:320,y:638.3}).wait(1).to({graphics:mask_graphics_37,x:320,y:636.3}).wait(1).to({graphics:mask_graphics_38,x:320,y:634.2}).wait(1).to({graphics:mask_graphics_39,x:320,y:632.2}).wait(1).to({graphics:mask_graphics_40,x:320,y:630.2}).wait(1).to({graphics:mask_graphics_41,x:320,y:628.2}).wait(1).to({graphics:mask_graphics_42,x:320,y:626.2}).wait(1).to({graphics:mask_graphics_43,x:320,y:624.1}).wait(1).to({graphics:mask_graphics_44,x:320,y:622.1}).wait(1).to({graphics:mask_graphics_45,x:320,y:620.1}).wait(1).to({graphics:mask_graphics_46,x:320,y:618.1}).wait(1).to({graphics:mask_graphics_47,x:320,y:616.1}).wait(1).to({graphics:mask_graphics_48,x:320,y:614}).wait(1).to({graphics:mask_graphics_49,x:320,y:612}).wait(1).to({graphics:mask_graphics_50,x:320,y:610}).wait(1).to({graphics:mask_graphics_51,x:320,y:608}).wait(1).to({graphics:mask_graphics_52,x:320,y:606}).wait(1).to({graphics:mask_graphics_53,x:320,y:603.9}).wait(1).to({graphics:mask_graphics_54,x:320,y:601.9}).wait(1).to({graphics:mask_graphics_55,x:320,y:599.9}).wait(1).to({graphics:mask_graphics_56,x:320,y:597.9}).wait(1).to({graphics:mask_graphics_57,x:320,y:595.9}).wait(1).to({graphics:mask_graphics_58,x:320,y:593.8}).wait(1).to({graphics:mask_graphics_59,x:320,y:591.8}).wait(1).to({graphics:mask_graphics_60,x:320,y:589.8}).wait(1).to({graphics:mask_graphics_61,x:320,y:587.8}).wait(1).to({graphics:mask_graphics_62,x:320,y:585.8}).wait(1).to({graphics:mask_graphics_63,x:320,y:583.7}).wait(1).to({graphics:mask_graphics_64,x:320,y:581.7}).wait(1).to({graphics:mask_graphics_65,x:320,y:579.7}).wait(1).to({graphics:mask_graphics_66,x:320,y:577.7}).wait(1).to({graphics:mask_graphics_67,x:320,y:575.6}).wait(1).to({graphics:mask_graphics_68,x:320,y:573.6}).wait(1).to({graphics:mask_graphics_69,x:320,y:571.6}).wait(1).to({graphics:mask_graphics_70,x:320,y:569.6}).wait(1).to({graphics:mask_graphics_71,x:320,y:567.6}).wait(1).to({graphics:mask_graphics_72,x:320,y:565.5}).wait(1).to({graphics:mask_graphics_73,x:320,y:563.5}).wait(1));

	// WATER
	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#92ECFF").s().p("ApTK4IhWhgIjgvcIAghkIEpjlIBqgRIP2AAIBXARID/D0IAUBjIjTQBIhPApIpxArg");
	this.shape_82.setTransform(320.3,523.8);

	this.shape_82.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_82).wait(74));
}).prototype = p = new cjs.MovieClip();

(lib.face = function(mode,startPosition,loop){
	this.initialize(mode,startPosition,loop,{});

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#000000").ss(4,1,1).p("ACKA5QAAgbgkguQgog1gkgGQgmgGg3AiQg3AjgKAkQgKAjANALQAKAJAdgCQAigDBggF");
	this.shape_74.setTransform(319.8,586.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#000000").ss(4,1,1).p("AguAYQAGgOAPgKQAdgaArAE");
	this.shape_75.setTransform(291.6,510.3);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#000000").ss(4,1,1).p("AgpgPIAfgBQAgAFATAc");
	this.shape_76.setTransform(345.4,508.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#000000").ss(7,1,1).p("ADpBWQhwgMicg0Qh0glg4gcQgPgIgHgRIgDgR");
	this.shape_77.setTransform(362.6,538.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#000000").ss(7,1,1).p("AjpB1QBagIC3hUQCwhOALgaQAIgRgBgMIgDgI");
	this.shape_78.setTransform(277,541.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#000000").ss(4,1).p("AAvg0IhdBp");
	this.shape_79.setTransform(414.9,555.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#000000").ss(4,1).p("ABIhNIiPCb");
	this.shape_80.setTransform(418.5,535.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#000000").ss(6,1).p("AjoilIlIgCQgqAAiPB2QhHA5g/A7IgCAQQgCATAFAPQAPAzBEAAQY7AAAhgJQAegHAOglQAQgqgdggQgYgahghNQhvhbgbgFQgqgJnzAK");
	this.shape_81.setTransform(320.6,467.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]}).wait(74));
}).prototype = p = new cjs.MovieClip();

(lib.right_leaf = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AjhggQAzgxAtgVQA/gdBQAGQBMAGBFA0QA/AwAEAmQADAig4AkQg8AnhHgBQg+gBhCgnIg0gn");
	this.shape.setTransform(0,1,1,1,-24.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAqB/Qg+gBhCgnIg0gnIhXhQQAzgxAtgVQA/gdBQAGQBMAGBFA0QA/AwAEAmQADAig4AkQg7AmhGAAIgCAAg");
	this.shape_1.setTransform(0,1,1,1,-24.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.9,-15.7,49.8,31.5);


(lib.left_leaf = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("AgwDfQgmhAgSg4QgWhEAFhCQAGhQBThCQAggZAcgMQAegMAMAIQAfAWANAsQAMAsgFBHQgDArggAwQgmAygOAW");
	this.shape.setTransform(1.3,0.8,1,1,-47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhoBnQgWhEAFhCQAGhQBThCQAggZAcgMQAegMAMAIQAfAWANAsQAMAsgFBHQgDArggAwQgmAygOAWIhSBhQgmhAgSg4g");
	this.shape_1.setTransform(1.3,0.8,1,1,-47.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-17.2,-22.5,34.6,45);



// stage content:
(lib.streaming = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	this.paused = true;


	// // WATER PIPE
	// this.waterpipe = new lib.Waterpipe();
	// this.waterpipe.setTransform(305.5,172.1,1,1,0,0,0,48.1,163.2);
	// this.stage.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.waterpipe}]}).wait(120));

	// L_LEAF
	this.instance = new lib.left_leaf("synched",0);
	this.instance.setTransform(332.5,421.4,1,1,61.5,0,0,14,19.2);
	this.lLeafTween = cjs.Tween.get(this.instance).to({rotation:0,x:313.2,y:378.4},73).wait(1);

	this.timeline.addTween(this.lLeafTween);

	// R_LEAF
	this.instance_1 = new lib.right_leaf("synched",0);
	this.instance_1.setTransform(340.1,419.4,1,1,55.5,0,0,-21.8,3.5);

	this.rLeafTween = cjs.Tween.get(this.instance_1).to({rotation:0,x:314.9,y:375.6},73).wait(1);

	this.timeline.addTween(this.rLeafTween);

	// STEM
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(6,1,1).p("ACSkqQgYgEgjADQhFAHgxAqQikCEBIGk");
	this.shape.setTransform(325.5,452);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(6,1,1).p("Ah5EwQhCl+CBiTQANgOAOgMQAxgqBEgIQAigEAYAE");
	this.shape_1.setTransform(325.3,451.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(6,1,1).p("Ah3EzQhDl/CBiVQAMgOAOgNQAxgrBDgIQAigFAYAE");
	this.shape_2.setTransform(325.1,451.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(6,1,1).p("Ah1E2QhDl/B/iYQAMgOAOgNQAwgsBDgJQAigFAXAD");
	this.shape_3.setTransform(324.9,451.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(6,1,1).p("AhzE4QhEl+B+ibQAMgPAOgNQAwgsBCgLQAhgFAYAC");
	this.shape_4.setTransform(324.7,450.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(6,1,1).p("AhxE7QhEl+B9ieQAMgPANgNQAvguBCgKQAhgGAXAB");
	this.shape_5.setTransform(324.5,450.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(6,1,1).p("AhvE+QhEl+B7iiQAMgPAOgNQAuguBBgMQAhgGAXAB");
	this.shape_6.setTransform(324.3,450.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(6,1,1).p("AhtFBQhFl+B7ilQALgPAOgNQAuguBAgOQAggHAXAB");
	this.shape_7.setTransform(324.1,450.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(6,1,1).p("AhsFEQhFl+B6ioQALgPANgNQAugvA/gOQAggIAXAB");
	this.shape_8.setTransform(323.9,449.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(6,1,1).p("AhqFGQhFl9B4irQALgPANgOQAtgvA/gPQAggIAXAA");
	this.shape_9.setTransform(323.7,449.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(6,1,1).p("AhoFKQhGl+B3itQAMgRANgNQAsgxA+gPQAggJAWgB");
	this.shape_10.setTransform(323.5,449.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(6,1,1).p("AhmFMQhGl+B2iwQALgQANgNQAsgyA9gRQAfgIAXgB");
	this.shape_11.setTransform(323.3,448.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(6,1,1).p("AhkFPQhHl+B1izQALgQANgOQArgyA9gRQAfgKAWgB");
	this.shape_12.setTransform(323.1,448.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(6,1,1).p("AhiFSQhHl9B0i3QAKgQANgOQArgzA8gSQAfgKAWgC");
	this.shape_13.setTransform(322.9,448.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(6,1,1).p("AhgFVQhIl9Bzi6QALgQAMgOQArg0A7gTQAegKAWgD");
	this.shape_14.setTransform(322.7,448.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(6,1,1).p("AheFYQhIl9Bxi9QALgQAMgPQAqg0A7gUQAegLAWgD");
	this.shape_15.setTransform(322.5,447.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(6,1,1).p("AhcFbQhIl9BwjAQAKgQAMgPQAqg1A6gVQAegLAVgE");
	this.shape_16.setTransform(322.3,447.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(6,1,1).p("AhaFeQhJl+BvjCQALgRALgOQApg2A6gWQAdgMAWgE");
	this.shape_17.setTransform(322.1,447.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(6,1,1).p("AhYFhQhJl+BujFQAKgRAMgOQAog3A5gXQAdgMAVgF");
	this.shape_18.setTransform(321.9,446.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(6,1,1).p("AhWFkQhKl+BtjIQAKgRAMgPQAog3A4gYQAdgNAVgF");
	this.shape_19.setTransform(321.7,446.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(6,1,1).p("AhUFnQhKl+BrjLQAKgRAMgPQAng4A4gZQAcgNAVgF");
	this.shape_20.setTransform(321.5,446.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(6,1,1).p("AhSFpQhLl9BrjOQAKgRALgQQAng4A3gZQAcgPAVgF");
	this.shape_21.setTransform(321.3,446);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(6,1,1).p("AhQFtQhLl+BpjRQAKgRALgQQAng5A2gaQAcgPAUgH");
	this.shape_22.setTransform(321.1,445.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(6,1,1).p("AhOFvQhMl9BpjUQAJgRALgQQAmg6A2gcQAbgOAVgH");
	this.shape_23.setTransform(320.9,445.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(6,1,1).p("AhMFyQhMl9BnjXQAJgSALgPQAmg7A1gcQAbgQAUgH");
	this.shape_24.setTransform(320.7,445.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#000000").ss(6,1,1).p("AhKF1QhNl9BnjaQAJgSALgQQAlg7A0gdQAbgQAUgI");
	this.shape_25.setTransform(320.5,444.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(6,1,1).p("AhIF4QhNl9BljdQAJgSALgQQAkg8A0geQAagQAUgJ");
	this.shape_26.setTransform(320.3,444.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(6,1,1).p("AhGF7QhNl9BjjgQAJgSALgQQAkg+AzgeQAagRAUgJ");
	this.shape_27.setTransform(320.1,444.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(6,1,1).p("AhEF+QhOl+BjjiQAJgSAKgQQAjg+AzggQAZgSAUgJ");
	this.shape_28.setTransform(319.9,444);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(6,1,1).p("AhCGBQhOl/BhjkQAJgSAKgRQAjg/AyggQAZgSAUgK");
	this.shape_29.setTransform(319.7,443.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(6,1,1).p("AhAGEQhPl/BhjnQAIgTAKgQQAjhAAxghQAZgSATgL");
	this.shape_30.setTransform(319.5,443.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(6,1,1).p("Ag+GHQhPl/BfjqQAIgTAKgQQAihAAxgjQAYgTAUgL");
	this.shape_31.setTransform(319.3,443.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(6,1,1).p("Ag8GKQhQl/BejtQAJgTAJgRQAihAAwgkQAYgTATgL");
	this.shape_32.setTransform(319.1,442.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(6,1,1).p("Ag6GMQhQl+BdjwQAIgTAKgRQAhhBAvglQAYgUATgL");
	this.shape_33.setTransform(318.9,442.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(6,1,1).p("Ag4GQQhRl/BcjzQAIgTAKgRQAghDAvgkQAXgVATgN");
	this.shape_34.setTransform(318.7,442.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#000000").ss(6,1,1).p("Ag1GSQhSl+Bbj2QAIgTAJgSQAghDAugmQAYgUASgN");
	this.shape_35.setTransform(318.5,441.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(6,1,1).p("AgzGVQhSl+Baj5QAHgTAJgSQAghEAtgnQAXgVATgN");
	this.shape_36.setTransform(318.3,441.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#000000").ss(6,1,1).p("AgyGYQhSl9BYj8QAIgUAJgSQAfhEAsgoQAXgWATgO");
	this.shape_37.setTransform(318.1,441.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(6,1,1).p("AgwGbQhSl9BXj/QAHgUAJgTQAfhEArgpQAXgWATgP");
	this.shape_38.setTransform(317.9,441);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(6,1,1).p("AguGeQhTl+BWkCQAIgUAIgSQAehGArgpQAXgXASgP");
	this.shape_39.setTransform(317.7,440.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(6,1,1).p("AgsGhQhTl+BVkFQAHgUAIgSQAehHAqgqQAWgXATgQ");
	this.shape_40.setTransform(317.5,440.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#000000").ss(6,1,1).p("AgqGkQhTl+BTkIQAHgUAJgSQAdhIAqgrQAVgYATgQ");
	this.shape_41.setTransform(317.3,440.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(6,1,1).p("AgnGmQhVl9BTkLQAHgUAIgTQAdhIApgsQAVgYASgR");
	this.shape_42.setTransform(317.1,439.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(6,1,1).p("AglGqQhVl+BRkOQAHgUAIgTQAchIApgtQAVgZASgR");
	this.shape_43.setTransform(316.9,439.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(6,1,1).p("AgjGsQhWl9BRkQQAHgWAHgSQAchKAoguQAUgZASgR");
	this.shape_44.setTransform(316.7,439.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#000000").ss(6,1,1).p("AghGvQhWl9BPkUQAHgVAIgTQAbhKAngvQAUgZASgS");
	this.shape_45.setTransform(316.5,439);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(6,1,1).p("AgfGyQhXl9BPkXQAGgVAIgTQAahLAngwQAUgaARgS");
	this.shape_46.setTransform(316.3,438.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#000000").ss(6,1,1).p("AgdG1QhXl9BNkaQAGgVAIgTQAahMAmgwQATgbASgT");
	this.shape_47.setTransform(316.1,438.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(6,1,1).p("AgbG4QhXl9BMkdQAGgVAHgUQAahMAlgyQATgbASgT");
	this.shape_48.setTransform(315.8,438.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#000000").ss(6,1,1).p("AgZG7QhXl9BKkgQAHgVAHgUQAZhNAkgyQATgcARgU");
	this.shape_49.setTransform(315.6,437.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(6,1,1).p("AgXG+QhYl9BKkiQAGgWAHgUQAYhOAkgzQATgdARgU");
	this.shape_50.setTransform(315.4,437.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#000000").ss(6,1,1).p("AgVHBQhYl9BIkmQAGgWAHgUQAYhOAjg0QASgdARgV");
	this.shape_51.setTransform(315.2,437.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(6,1,1).p("AgTHEQhZl9BIkpQAFgWAHgUQAYhPAig1QASgdARgW");
	this.shape_52.setTransform(315,436.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(6,1,1).p("AgQHHQhal9BHksQAFgWAHgUQAXhQAhg2QASgeARgW");
	this.shape_53.setTransform(314.8,436.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(6,1,1).p("AgOHJQhal8BFkvQAFgWAHgVQAXhRAgg2QASgeAQgX");
	this.shape_54.setTransform(314.6,436.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#000000").ss(6,1,1).p("AgMHNQhbl9BEkyQAGgWAGgVQAXhRAfg4QASgeAQgX");
	this.shape_55.setTransform(314.4,436.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(6,1,1).p("AgKHPQhbl8BDk1QAFgWAGgVQAXhSAeg4QARggAQgX");
	this.shape_56.setTransform(314.2,435.8);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#000000").ss(6,1,1).p("AgIHSQhbl8BCk4QAFgXAGgVQAWhSAeg6QAQgfAQgY");
	this.shape_57.setTransform(313.9,435.5);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(6,1,1).p("AgGHVQhbl8BAk7QAFgXAGgVQAWhTAdg7QAQggAQgY");
	this.shape_58.setTransform(313.7,435.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#000000").ss(6,1,1).p("AgEHYQhcl8A/k+QAFgXAGgVQAWhUAcg7QAQghAPgZ");
	this.shape_59.setTransform(313.5,434.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(6,1,1).p("AgCHbQhcl8A+lBQAFgXAFgWQAWhVAbg8QAPghAQgZ");
	this.shape_60.setTransform(313.3,434.6);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(6,1,1).p("AAAHeQhcl8A9lEQAEgXAGgVQAVhWAag9QAPgiAQga");
	this.shape_61.setTransform(313.1,434.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(6,1,1).p("AABHhQhcl8A8lHQAFgXAFgWQAUhWAag+QAPgjAPga");
	this.shape_62.setTransform(312.9,434);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(6,1,1).p("AADHkQhcl8A7lKQAEgXAFgWQAUhYAZg+QAPgjAPgb");
	this.shape_63.setTransform(312.7,433.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(6,1,1).p("AAFHnQhcl8A6lNQAEgYAFgWQAThYAZg/QAOgjAPgc");
	this.shape_64.setTransform(312.4,433.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#000000").ss(6,1,1).p("AAHHqQhdl8A5lQQAEgYAFgWQAThZAYhAQAOgkAOgc");
	this.shape_65.setTransform(312.2,433.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(6,1,1).p("AAJHsQhdl8A3lSQAEgYAFgXQAShZAXhBQAOgkAPgd");
	this.shape_66.setTransform(312,432.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#000000").ss(6,1,1).p("AAMHwQhel8A2lWQAEgYAEgWQAShaAXhDQANgkAPgd");
	this.shape_67.setTransform(311.8,432.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(6,1,1).p("AAOHyQhel8A1lYQADgYAFgXQARhbAWhDQANglAOgd");
	this.shape_68.setTransform(311.6,432.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#000000").ss(6,1,1).p("AAQH1Qhfl7A0lcQAEgYAEgXQARhcAVhEQANglAOge");
	this.shape_69.setTransform(311.4,432);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#000000").ss(6,1,1).p("AASH4Qhfl7AzlfQADgZAEgXQARhcAUhFQANgmAOge");
	this.shape_70.setTransform(311.1,431.7);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#000000").ss(6,1,1).p("AAUH7Qhfl7AxliQAEgZADgXQAQhdAUhGQAMgmAOgf");
	this.shape_71.setTransform(310.9,431.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#000000").ss(6,1,1).p("AAXH+Qhgl8AwlkQADgZAEgYQAQhdAThHQAMgnANgf");
	this.shape_72.setTransform(310.7,431.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#000000").ss(6,1,1).p("AApoAQgqBpgXC1QgwFoBhF7");
	this.shape_73.setTransform(310.5,430.8);

	this.stemTween = cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).wait(1)
	this.timeline.addTween(this.stemTween);

	// FACE
	this.face = new lib.face();

	// this.faceTween = cjs.Tween.get({}).to({state:[{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74}]}).wait(74);
	this.addChild(this.face);

	// STREAM
	this.instance_2 = new lib.stream();
	this.instance_2.setTransform(323,459.6,1,1,0,0,0,44.5,134.1);

	this.streamTween = cjs.Tween.get(this.instance_2).wait(74)
	this.timeline.addTween(this.streamTween);

	


	// this.framerate = 60;

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(549.3,867.8,204.5,296.3);





})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;