function update(type) {
  let x, y, z;
  if(type == 0) {
    let a = ov1.value;
    let b = ov2.value;
    let c = ov3.value;
    a = a / 8;
    b = b * 1;
    c = c / 8;
    ne1.value = a;
    ne2.value = b;
    ne3.value = c;
  } else if(type == 1) {
    let a = ne1.value;
    let b = ne2.value;
    let c = ne3.value;
    a = a * 8;
    b = b * 1;
    c = c * 8;
    ov1.value = a;
    ov2.value = b;
    ov3.value = c;
  }
}
