document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('signupForm');
  const fullName = document.getElementById('fullName');
  const age = document.getElementById('age');
  const email = document.getElementById('email');
  const gender = document.getElementById('gender');
  const day = document.getElementById('day');
  const month = document.getElementById('month');
  const year = document.getElementById('year');
  const password = document.getElementById('password');
  const confirmPassword = document.getElementById('confirmPassword');

  // ملء اليوم/الشهر/السنة
  for(let i=1;i<=31;i++) day.innerHTML += `<option value="${i}">${i}</option>`;
  const months = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  months.forEach((m,i)=> month.innerHTML += `<option value="${i+1}">${m}</option>`);
  for(let y=1950;y<=2025;y++) year.innerHTML += `<option value="${y}">${y}</option>`;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let errors = [];

    // الاسم
    if(fullName.value.trim().length < 3){
      errors.push('الاسم يجب أن يحتوي على 3 أحرف على الأقل');
      fullName.classList.add('is-invalid');
    } else fullName.classList.remove('is-invalid');

    // العمر
    if(age.value < 1 || age.value > 120){
      errors.push('العمر يجب أن يكون بين 1 و 120');
      age.classList.add('is-invalid');
    } else age.classList.remove('is-invalid');

    // البريد
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email.value)){
      errors.push('أدخل بريد إلكتروني صالح');
      email.classList.add('is-invalid');
    } else email.classList.remove('is-invalid');

    // كلمة المرور
    const pwd = password.value;
    if(pwd.length < 8 || !/[0-9]/.test(pwd) || !/[A-Za-z]/.test(pwd)){
      errors.push('كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل وأرقام وأحرف');
      password.classList.add('is-invalid');
    } else password.classList.remove('is-invalid');

    // تأكيد كلمة المرور
    if(confirmPassword.value !== pwd || confirmPassword.value === ''){
      errors.push('كلمة المرور وتأكيدها غير متطابقين');
      confirmPassword.classList.add('is-invalid');
    } else confirmPassword.classList.remove('is-invalid');

    // الجنس
    if(!gender.value){
      errors.push('اختر الجنس');
      gender.classList.add('is-invalid');
    } else gender.classList.remove('is-invalid');

    // اليوم/الشهر/السنة
    if(!day.value){ errors.push('اختر اليوم'); day.classList.add('is-invalid'); } else day.classList.remove('is-invalid');
    if(!month.value){ errors.push('اختر الشهر'); month.classList.add('is-invalid'); } else month.classList.remove('is-invalid');
    if(!year.value){ errors.push('اختر السنة'); year.classList.add('is-invalid'); } else year.classList.remove('is-invalid');

    if(errors.length > 0){
      alert('يوجد أخطاء:\n- ' + errors.join('\n- '));
    } else {
      alert('تم إرسال البيانات بنجاح ✅');
      form.reset();
    }
  });
});
