function init(){
	var motion = new jsAnimManager();
	var a=document.getElementById("crown_flower");
	a.style.left=(950-a.clientWidth)/2 + "px";

	//Princess Birthday Text Motion
	pbth = document.getElementById("princess_birthday_text");
	pbth.style.position = "relative";
	pbth.style.left=(950-pbth.clientWidth)/2 + "px";
	var pbth_anim = motion.createAnimObject("princess_birthday_text"); 
	pbth_anim.add({property: Prop.top, to:130, duration: 2000});

	//Carriage Motion
	carriage_object = document.getElementById("carriage");
	motion.registerPosition("carriage");
	carriage_object.setPosition(600,150);
	carriage_object.style.position = "relative";
	var carriage_anim = motion.createAnimObject("carriage"); 
	carriage_anim.add({property: Prop.position, to: new Pos(310,150), duration:8000});

	//Cartoon1
	cartoon1_object = document.getElementById("cartoon1");
	motion.registerPosition("cartoon1");
	cartoon1_object.setPosition(-600,350);
	var cartoon1_anim = motion.createAnimObject("cartoon1");
	cartoon1_anim.add({property: Prop.position, to: new Pos(-50,155), duration:8000});
	cartoon1_anim.add({property: Prop.position, to: new Pos(-50,145), duration: 3000, loop:-1, ease: jsAnimEase.bounceSmooth});

	//cartoon_skii
	cartoon_skii_object = document.getElementById("cartoon_skii");
	motion.registerPosition("cartoon_skii");
	cartoon_skii_object.setPosition(-850,480);
	var cartoon_skii_anim = motion.createAnimObject("cartoon_skii"); 
	cartoon_skii_anim.add({property: Prop.wait, duration: 9000});
	cartoon_skii_anim.add({property: Prop.position, to: new Pos(-170,480), duration:8000});

	//cartoon_ball
	cartoon_ball_object = document.getElementById("cartoon_ball");
	motion.registerPosition("cartoon_ball");
	cartoon_ball_object.setPosition(620,880);
	var cartoon_ball_anim = motion.createAnimObject("cartoon_ball");
	cartoon_ball_anim.add({property: Prop.wait, duration: 2000});
	cartoon_ball_anim.add({property: Prop.position, to: new Pos(620,380), duration:14000});
	cartoon_ball_anim.add({property: Prop.position, to: new Pos(620,375), duration: 3000, loop:-1, ease: jsAnimEase.bounceSmooth});

	//cartoon3
	cartoon3_object = document.getElementById("cartoon3");
	motion.registerPosition("cartoon3");
	cartoon3_object.setPosition(600,100);
	var cartoon3_anim = motion.createAnimObject("cartoon3");
	cartoon3_anim.add({property: Prop.wait, duration: 2000});
	cartoon3_anim.add({property: Prop.position, to: new Pos(-50,180), duration:14000});

	//angel
	angel_object = document.getElementById("angel");
	motion.registerPosition("angel");
	angel_object.setPosition(100,-100);
	var angel_anim = motion.createAnimObject("angel");
	angel_anim.add({property: Prop.positionSemicircle(true), to:new Pos(-330,280), duration:10000, ease:jsAnimEase.standard});
	
	//cartoon6
	cartoon6_object = document.getElementById("cartoon6");
	motion.registerPosition("cartoon6");
	cartoon6_object.setPosition(-600,550);
	var cartoon6_anim = motion.createAnimObject("cartoon6");
	cartoon6_anim.add({property: Prop.position, to: new Pos(-20,550), duration:8000});
	
	//cartoon5
	cartoon5_object = document.getElementById("cartoon5");
	motion.registerPosition("cartoon5");
	cartoon5_object.setPosition(900,850);
	var cartoon5_anim = motion.createAnimObject("cartoon5");
	cartoon5_anim.add({property: Prop.position, to: new Pos(300,850), duration:8000});

	//cartoon_boat
	cartoon_boat_object = document.getElementById("cartoon_boat");
	motion.registerPosition("cartoon_boat");
	cartoon_boat_object.setPosition(-1800,500);
	var cartoon_boat_anim = motion.createAnimObject("cartoon_boat");
	cartoon_boat_anim.add({property: Prop.position, to: new Pos(-210,500), duration:8000});
	cartoon_boat_anim.add({property: Prop.position, to: new Pos(-205,495), duration:3000, loop:-1, ease: jsAnimEase.bounceSmooth});
	
	//shark
	shark_object = document.getElementById("shark");
	motion.registerPosition("shark");
	shark_object.setPosition(-900,610);
	var shark_anim = motion.createAnimObject("shark");
	shark_anim.add({property: Prop.position, to: new Pos(300,610), duration:8000});
}