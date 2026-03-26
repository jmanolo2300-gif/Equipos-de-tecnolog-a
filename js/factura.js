function mostrar(){
    let item1=document.getElementById('prod1');
    let item2=document.getElementById('prod2');
    let item3=document.getElementById('prod3');
    let adic=0;

    
    if(item1.selectedIndex==0){
        document.getElementById('desc01').value="silla+audifonos+camara"; //Descripcion de producto
        document.getElementById('vau01').value=0; //Valor unitario
        document.getElementById('cant01').value=0; //Cantidad
    }
    if(item1.selectedIndex==1){
        document.getElementById('desc01').value="silla + cojin + mouse pad"; 
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value; 
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0); 
    }
    if(item1.selectedIndex==2){
        document.getElementById('desc01').value="Teclado + mouse + audifonos gamer"; 
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value; 
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0); 
    }
    if(item1.selectedIndex==3){
        document.getElementById('desc01').value="audifonos + cable + camara";
        document.getElementById('vau01').value=item1.options[item1.selectedIndex].value;
        document.getElementById('vat01').value=(parseFloat(document.getElementById('cant01').value)*parseFloat(document.getElementById('vau01').value)||0).toFixed(0);
    }

    //2do item
    if(item2.selectedIndex==0){
        document.getElementById('desc02').value=""; //Descripcion de producto
        document.getElementById('vau02').value=0; //Valor unitario
        document.getElementById('cant02').value=0; //Cantidad
    }
    if(item2.selectedIndex==1){
        document.getElementById('desc02').value="silla + cojin + mouse pad"; 
        document.getElementById('vau02').value=item2.options[item2.selectedIndex].value; 
        document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0); 
    }
    if(item2.selectedIndex==2){
        document.getElementById('desc02').value="Teclado + mouse + audifonos gamer"; 
        document.getElementById('vau02').value=item2.options[item2.selectedIndex].value; 
        document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0); 
    }
    if(item2.selectedIndex==3){
        document.getElementById('desc02').value="audifonos + cable + camara";
        document.getElementById('vau02').value=item2.options[item2.selectedIndex].value;
        document.getElementById('vat02').value=(parseFloat(document.getElementById('cant02').value)*parseFloat(document.getElementById('vau02').value)||0).toFixed(0);
    }

    //3er item
    if(item3.selectedIndex==0){
        document.getElementById('desc03').value=""; //Descripcion de producto
        document.getElementById('vau03').value=0; //Valor unitario
        document.getElementById('cant03').value=0; //Cantidad
    }
    if(item3.selectedIndex==1){
        document.getElementById('desc03').value="silla + cojin + mouse pad"; 
        document.getElementById('vau03').value=item3.options[item3.selectedIndex].value; 
        document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0); 
    }
    if(item3.selectedIndex==2){
        document.getElementById('desc03').value="Teclado + mouse + audifonos gamer"; 
        document.getElementById('vau03').value=item3.options[item3.selectedIndex].value; 
        document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0); 
    }
    if(item3.selectedIndex==3){
        document.getElementById('desc03').value="audifonos + cable + camara";
        document.getElementById('vau03').value=item3.options[item3.selectedIndex].value;
        document.getElementById('vat03').value=(parseFloat(document.getElementById('cant03').value)*parseFloat(document.getElementById('vau03').value)||0).toFixed(0);
    }

    //Calcular adicionales
    let totaladic0=0;
    if(document.getElementById('checkbox1').checked){ //Cerveza es seleccionada
        totaladic0+=3000;
    }
    if(document.getElementById('checkbox2').checked){ //Helado es seleccionado
        totaladic0+=2500;
    }
    if(document.getElementById('checkbox3').checked){ //Jugo es seleccionado
        totaladic0+=2300;
    }

    //Total de adicional
    document.getElementById('adic0').value=totaladic0;

    //Calcular subtotal
    document.getElementById('subt').value=(parseFloat(document.getElementById('vat01').value)+parseFloat(document.getElementById('vat02').value)+parseFloat(document.getElementById('vat03').value)+parseFloat(document.getElementById('adic0').value)||0).toFixed(0);

    //Calcular IVA
    document.getElementById('iva').value=(parseFloat(document.getElementById('subt').value)*0.19||0).toFixed(0);

    //Calcular descuento
    if(document.getElementById('radio1').checked){ //Efectivo es seleccionado
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.10||0).toFixed(0);
    }
    else if(document.getElementById('radio2').checked){ //Nequi es seleccionado
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00||0).toFixed(0);
    }
    else if(document.getElementById('radio3').checked){ //TjCredito es seleccionado
        document.getElementById('desc').value=(parseFloat(document.getElementById('subt').value)*0.00||0).toFixed(0);
    }

    //Calcular Neto
    document.getElementById('neto').value=(parseFloat(document.getElementById('subt').value)+parseFloat(document.getElementById('iva').value)-parseFloat(document.getElementById('desc').value)||0).toFixed(0);
}

function generar(){
    swal("Estimdo cliente","Favor esperar su pedido en proceso","success");
}