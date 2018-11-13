function walec(geometry,ilosc,wysokosc,radius,color1 = 0x223322, color2 = 0x445566)
	{
		//Pierwsszy walec
		for(let i=0; i<=ilosc;i++)
		{
			let angle = (i*2*Math.PI)/ilosc;
			geometry.vertices.push(new THREE.Vector3(Math.sin(angle)*radius,Math.cos(angle)*radius,0));
			let face = new THREE.Face3(0,i,i+1);
			face.color = new THREE.Color(0x001100);
			geometry.faces.push(face);
		}

		//Druga podstawa
		for(let i=ilosc+1; i<=2*ilosc+1;i++)
		{
			let angle = (i*2*Math.PI)/ilosc;
			geometry.vertices.push(new THREE.Vector3(Math.sin(angle)*radius,Math.cos(angle)*radius,wysokosc));
			let face = new THREE.Face3(ilosc+1,i+1,i);
			face.color = new THREE.Color(0x005500);
			geometry.faces.push(face);
		}

		//Sciany w jedną strone
		for(let i=0; i<ilosc;i++)
		{
			let face = new THREE.Face3(i,i+ilosc,i+1);
			face.color = new THREE.Color(color1);
			geometry.faces.push(face);
		}
		let face = new THREE.Face3(ilosc,2*ilosc,1);
		face.color = new THREE.Color(color1);
		geometry.faces.push(face);

		//Sciany w druga
		for(let i=1; i<ilosc;i++)
		{
			let face2 = new THREE.Face3(i+ilosc+1,i+1,i+ilosc);
			face2.color = new THREE.Color(color2);
			geometry.faces.push(face2);
		}

		let face2 = new THREE.Face3(ilosc*2,ilosc+1,1);
		face2.color = new THREE.Color(color2);
		geometry.faces.push(face2);
	}

function walech(geometry,ilosc,wysokosc,radius,color1 = 0x223322, color2 = 0x445566)
	{
		//Pierwsszy walec
		for(let i=0; i<=ilosc;i++)
		{
			let angle = (i*2*Math.PI)/ilosc;
			geometry.vertices.push(new THREE.Vector3(0,Math.sin(angle)*radius,Math.cos(angle)*radius));
			let face = new THREE.Face3(0,i,i+1);
			face.color = new THREE.Color(0x001100);
			geometry.faces.push(face);
		}

		//Druga podstawa
		for(let i=ilosc+1; i<=2*ilosc+1;i++)
		{
			let angle = (i*2*Math.PI)/ilosc;
			geometry.vertices.push(new THREE.Vector3(wysokosc,Math.sin(angle)*radius,Math.cos(angle)*radius));
			let face = new THREE.Face3(ilosc+1,i+1,i);
			face.color = new THREE.Color(0x005500);
			geometry.faces.push(face);
		}

		//Sciany w jedną strone
		for(let i=0; i<ilosc;i++)
		{
			let face = new THREE.Face3(i,i+ilosc,i+1);
			face.color = new THREE.Color(color1);
			geometry.faces.push(face);
		}
		let face = new THREE.Face3(ilosc,2*ilosc,1);
		face.color = new THREE.Color(color1);
		geometry.faces.push(face);

		//Sciany w druga
		for(let i=1; i<ilosc;i++)
		{
			let face2 = new THREE.Face3(i+ilosc+1,i+1,i+ilosc);
			face2.color = new THREE.Color(color2);
			geometry.faces.push(face2);
		}

		let face2 = new THREE.Face3(ilosc*2,ilosc+1,1);
		face2.color = new THREE.Color(color2);
		geometry.faces.push(face2);
	}

function walecv(geometry,ilosc,wysokosc,radius,color1 = 0x223322, color2 = 0x445566)
	{
		//Pierwsszy walec
		for(let i=0; i<=ilosc;i++)
		{
			let angle = (i*2*Math.PI)/ilosc;
			geometry.vertices.push(new THREE.Vector3(Math.sin(angle)*radius,0,Math.cos(angle)*radius));
			let face = new THREE.Face3(0,i,i+1);
			face.color = new THREE.Color(0x001100);
			geometry.faces.push(face);
		}

		//Druga podstawa
		for(let i=ilosc+1; i<=2*ilosc+1;i++)
		{
			let angle = (i*2*Math.PI)/ilosc;
			geometry.vertices.push(new THREE.Vector3(Math.sin(angle)*radius,wysokosc,Math.cos(angle)*radius));
			let face = new THREE.Face3(ilosc+1,i+1,i);
			face.color = new THREE.Color(0x005500);
			geometry.faces.push(face);
		}

		//Sciany w jedną strone
		for(let i=0; i<ilosc;i++)
		{
			let face = new THREE.Face3(i,i+ilosc,i+1);
			face.color = new THREE.Color(color1);
			geometry.faces.push(face);
		}
		let face = new THREE.Face3(ilosc,2*ilosc,1);
		face.color = new THREE.Color(color1);
		geometry.faces.push(face);

		//Sciany w druga
		for(let i=1; i<ilosc;i++)
		{
			let face2 = new THREE.Face3(i+ilosc+1,i+1,i+ilosc);
			face2.color = new THREE.Color(color2);
			geometry.faces.push(face2);
		}

		let face2 = new THREE.Face3(ilosc*2,ilosc+1,1);
		face2.color = new THREE.Color(color2);
		geometry.faces.push(face2);
	}

function czolg(group)
{
	
	var kola=[new THREE.Geometry(),new THREE.Geometry(),new THREE.Geometry(),new THREE.Geometry(),new THREE.Geometry(),new THREE.Geometry()];
	let kadlub = new THREE.Geometry();
	var material = new THREE.MeshBasicMaterial({color: 0x5f5f5f});
	material.vertexColors = THREE.FaceColors;
	let szerokosc = 6;

	//Kola
	for(let i=0;i<6;i++) 
	{
		walec(kola[i],20,0.25,1);
	}
	var roller = [new THREE.Mesh( kola[0], material ),new THREE.Mesh( kola[1], material ),new THREE.Mesh( kola[2], material ),new THREE.Mesh( kola[3], material ),new THREE.Mesh( kola[4], material ),new THREE.Mesh( kola[5], material )];
	for(let i=0;i<6;i++) 
	{
		if(i<3)
		{ 
			roller[i].position.x += 2.05*i;
		}
		else
		{
			roller[i].position.x += 2.05*(i-3);
			roller[i].position.z = -6;
		}
	}


	//Kadlub
	let material3 = new THREE.MeshBasicMaterial({color: 0xff0000});
	kadlub.vertices.push(new THREE.Vector3(-2,0,0));//0 blisko lewy
	kadlub.vertices.push(new THREE.Vector3(6,0,0));//1 blisko prawy
	kadlub.vertices.push(new THREE.Vector3(-2,0,-szerokosc+0.25));//2 daleko lewy
	kadlub.vertices.push(new THREE.Vector3(6,0,-szerokosc+0.25));//3 daleko prawy
	kadlub.vertices.push(new THREE.Vector3(-0.5,2,0));//4 gora blisko lewy
	kadlub.vertices.push(new THREE.Vector3(4.5,2,0));//5 gora blisko prawy
	kadlub.vertices.push(new THREE.Vector3(-0.5,2,-szerokosc+0.25));// 6 gora daleko lewy
	kadlub.vertices.push(new THREE.Vector3(4.5,2,-szerokosc+0.25));// 7 gora daleko prawy
	kadlub.faces.push(new THREE.Face3(2,1,0));//Dol
	kadlub.faces.push(new THREE.Face3(3,1,2));//Dol
	kadlub.faces.push(new THREE.Face3(4,5,6));//Gora
	kadlub.faces.push(new THREE.Face3(6,5,7));//Gora
	kadlub.faces.push(new THREE.Face3(0,1,4));//Przod
	kadlub.faces.push(new THREE.Face3(1,5,4));//Przod
	kadlub.faces.push(new THREE.Face3(6,3,2));//Tyl
	kadlub.faces.push(new THREE.Face3(6,7,3));//Tyl
	kadlub.faces.push(new THREE.Face3(4,6,2));//lewo
	kadlub.faces.push(new THREE.Face3(4,2,0));//lewo
	kadlub.faces.push(new THREE.Face3(3,7,5));//prawo
	kadlub.faces.push(new THREE.Face3(3,5,1));//prawo
	let kadlubb = new THREE.Mesh(kadlub,material3);


	let wieza = new THREE.Geometry();
	wieza.vertices.push(new THREE.Vector3(0.5,2,-1));//0 blisko lewy
	wieza.vertices.push(new THREE.Vector3(3.5,2,-1));//1 blisko prawy
	wieza.vertices.push(new THREE.Vector3(0.5,2,-4.75));//2 daleko lewy
	wieza.vertices.push(new THREE.Vector3(3.5,2,-4.75));//3 daleko prawy
	wieza.vertices.push(new THREE.Vector3(0.5,3.5,-1));//4 gora blisko lewy
	wieza.vertices.push(new THREE.Vector3(3.5,3.5,-1));//5 gora blisko prawy
	wieza.vertices.push(new THREE.Vector3(0.5,3.5,-4.75));//6 gora daleko lewy
	wieza.vertices.push(new THREE.Vector3(3.5,3.5,-4.75));//7 gora daleko prawy
	wieza.faces.push(new THREE.Face3(0,1,2));//Dol
	wieza.faces.push(new THREE.Face3(2,1,3));//Dol
	wieza.faces.push(new THREE.Face3(4,5,6));//Gora
	wieza.faces.push(new THREE.Face3(6,5,7));//Gora
	wieza.faces.push(new THREE.Face3(0,1,4));//Przod
	wieza.faces.push(new THREE.Face3(1,5,4));//Przod
	wieza.faces.push(new THREE.Face3(6,3,2));//Tyl
	wieza.faces.push(new THREE.Face3(6,7,3));//Tyl
	wieza.faces.push(new THREE.Face3(4,6,2));//lewo
	wieza.faces.push(new THREE.Face3(4,2,0));//lewo
	wieza.faces.push(new THREE.Face3(3,7,5));//prawo
	wieza.faces.push(new THREE.Face3(3,5,1));//prawo

	let material2 = new THREE.MeshBasicMaterial({color: 0x00ffff});
	let wiezyczka = new THREE.Mesh(wieza,material2);


	//Lufa
	let lufaa = new THREE.Geometry();
	walec(lufaa,20,3,0.35);
	let lufa = new THREE.Mesh(lufaa,material);
	lufa.position.x = 1;
	lufa.position.z = -3;
	lufa.position.y = 2.5;
	lufa.rotation.y = -1.58;
	lufa.rotation.x = 0.5;

	for(let i=0;i<6;i++) group.add(roller[i]);
	group.add(kadlubb);
	group.add(wiezyczka);
	group.add(lufa);
}

function kwadrat(ziemia,x,y,z=0)
{
	ziemia.vertices.push(new THREE.Vector3(-x,-y,-x-z));//0 daleko lewy
	ziemia.vertices.push(new THREE.Vector3(-x,-y,x+z));//1 blisko lewy
	ziemia.vertices.push(new THREE.Vector3(x,-y,-x-z));//2 daleko prawy
	ziemia.vertices.push(new THREE.Vector3(x,-y,x+z));//3 blisko prawy
	ziemia.faces.push(new THREE.Face3(0,1,3));//Dol
	ziemia.faces.push(new THREE.Face3(3,2,0));//Dol
}

function czolg2(group,group2)
{
	
	var kola=[new THREE.Geometry(),new THREE.Geometry(),new THREE.Geometry(),new THREE.Geometry(),new THREE.Geometry(),new THREE.Geometry()];
	let kadlub = new THREE.Geometry();
	var material = new THREE.MeshBasicMaterial({color: 0x5f5f5f});
	material.vertexColors = THREE.FaceColors;
	let szerokosc = 6;

	//Kola
	for(let i=0;i<6;i++) 
	{
		walec(kola[i],20,0.25,1);
	}
	var roller = [new THREE.Mesh( kola[0], material ),new THREE.Mesh( kola[1], material ),new THREE.Mesh( kola[2], material ),new THREE.Mesh( kola[3], material ),new THREE.Mesh( kola[4], material ),new THREE.Mesh( kola[5], material )];
	for(let i=0;i<6;i++) 
	{
		if(i<3)
		{ 
			roller[i].position.x += 2.05*i;
		}
		else
		{
			roller[i].position.x += 2.05*(i-3);
			roller[i].position.z = -6;
		}
	}


	//Kadlub
	let material3 = new THREE.MeshBasicMaterial({color: 0xff0000});
	kadlub.vertices.push(new THREE.Vector3(-2,0,0));//0 blisko lewy
	kadlub.vertices.push(new THREE.Vector3(6,0,0));//1 blisko prawy
	kadlub.vertices.push(new THREE.Vector3(-2,0,-szerokosc+0.25));//2 daleko lewy
	kadlub.vertices.push(new THREE.Vector3(6,0,-szerokosc+0.25));//3 daleko prawy
	kadlub.vertices.push(new THREE.Vector3(-0.5,2,0));//4 gora blisko lewy
	kadlub.vertices.push(new THREE.Vector3(4.5,2,0));//5 gora blisko prawy
	kadlub.vertices.push(new THREE.Vector3(-0.5,2,-szerokosc+0.25));// 6 gora daleko lewy
	kadlub.vertices.push(new THREE.Vector3(4.5,2,-szerokosc+0.25));// 7 gora daleko prawy
	kadlub.faces.push(new THREE.Face3(2,1,0));//Dol
	kadlub.faces.push(new THREE.Face3(3,1,2));//Dol
	kadlub.faces.push(new THREE.Face3(4,5,6));//Gora
	kadlub.faces.push(new THREE.Face3(6,5,7));//Gora
	kadlub.faces.push(new THREE.Face3(0,1,4));//Przod
	kadlub.faces.push(new THREE.Face3(1,5,4));//Przod
	kadlub.faces.push(new THREE.Face3(6,3,2));//Tyl
	kadlub.faces.push(new THREE.Face3(6,7,3));//Tyl
	kadlub.faces.push(new THREE.Face3(4,6,2));//lewo
	kadlub.faces.push(new THREE.Face3(4,2,0));//lewo
	kadlub.faces.push(new THREE.Face3(3,7,5));//prawo
	kadlub.faces.push(new THREE.Face3(3,5,1));//prawo
	let kadlubb = new THREE.Mesh(kadlub,material3);


	let wieza = new THREE.Geometry();
	wieza.vertices.push(new THREE.Vector3(0.5,2,-1));//0 blisko lewy
	wieza.vertices.push(new THREE.Vector3(3.5,2,-1));//1 blisko prawy
	wieza.vertices.push(new THREE.Vector3(0.5,2,-4.75));//2 daleko lewy
	wieza.vertices.push(new THREE.Vector3(3.5,2,-4.75));//3 daleko prawy
	wieza.vertices.push(new THREE.Vector3(0.5,3.5,-1));//4 gora blisko lewy
	wieza.vertices.push(new THREE.Vector3(3.5,3.5,-1));//5 gora blisko prawy
	wieza.vertices.push(new THREE.Vector3(0.5,3.5,-4.75));//6 gora daleko lewy
	wieza.vertices.push(new THREE.Vector3(3.5,3.5,-4.75));//7 gora daleko prawy
	wieza.faces.push(new THREE.Face3(0,1,2));//Dol
	wieza.faces.push(new THREE.Face3(2,1,3));//Dol
	wieza.faces.push(new THREE.Face3(4,5,6));//Gora
	wieza.faces.push(new THREE.Face3(6,5,7));//Gora
	wieza.faces.push(new THREE.Face3(0,1,4));//Przod
	wieza.faces.push(new THREE.Face3(1,5,4));//Przod
	wieza.faces.push(new THREE.Face3(6,3,2));//Tyl
	wieza.faces.push(new THREE.Face3(6,7,3));//Tyl
	wieza.faces.push(new THREE.Face3(4,6,2));//lewo
	wieza.faces.push(new THREE.Face3(4,2,0));//lewo
	wieza.faces.push(new THREE.Face3(3,7,5));//prawo
	wieza.faces.push(new THREE.Face3(3,5,1));//prawo

	let material2 = new THREE.MeshBasicMaterial({color: 0x00ffff});
	let wiezyczka = new THREE.Mesh(wieza,material2);


	//Lufa
	let lufaa = new THREE.Geometry();
	walec(lufaa,20,3,0.35);
	let lufa = new THREE.Mesh(lufaa,material);
	lufa.position.x = 1;
	lufa.position.z = -3;
	lufa.position.y = 2.5;
	lufa.rotation.y = -1.58;
	lufa.rotation.x = 0.5;

	for(let i=0;i<6;i++) group.add(roller[i]);
	group.add(kadlubb);
	//group.add(wiezyczka);
	group2.add(wiezyczka);
	//group.add(lufa);
	group2.add(lufa);
}