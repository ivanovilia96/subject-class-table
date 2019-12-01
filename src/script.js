class Person {
  constructor(fio) {
    this.fio = fio;
  }
}

class Student extends Person {
  constructor(fio, id) {
    super(fio);
    this.id = id;
  }
}

class Teacher extends Person {
  constructor(fio, stepen, id) {
    super(fio);
    this.fio = fio;
    this.stepen = stepen;
    this.id = id;
  }
}

class SubjectOfStudy extends Teacher {
  constructor(name, id) {
    super();
    this.fio = super.fio
    this.name = name;
    this.id = id;
  }
}

class ClassofStudy {
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
}
class Urok {
  constructor(id, idSubjectOfStudy, idOfTeacher, idOfClasOfStudy, data, idStudentsItOut) {
    this.id = id;
    this.idSubjectOfStudy = idSubjectOfStudy;
    this.idOfTeacher = idOfTeacher;
    this.idOfClasOfStudy = idOfClasOfStudy;
    this.data = data;
    this.idStudentsItOut = idStudentsItOut;
  }
}
(() => {
  let firstClassOfStudy = new ClassofStudy('first-class-sun', 1),
    firstSubjectOfStudy = new SubjectOfStudy('biology', 1),
    secondSubjectOfStudy = new SubjectOfStudy('physics', 2),
    threadSubjectOfStudy = new SubjectOfStudy('maths', 3);

  let secondClassOfStudy = new ClassofStudy('second-class-tree', 2),
    fifthSubjectOfstudy = new SubjectOfStudy('physical Culture', 4),
    sixthSubjectOfStudy = new SubjectOfStudy('philosophy', 5);
  let threadClassOfStudy = new ClassofStudy(`thread-class-lake`, 3);
  let teacher1 = new Teacher(`Ivanov I.I.`, `doctor`, 1),
    teacher2 = new Teacher(`Shitov K.I.`, `docent`, 2), teacher5 = new Teacher(`Nitche F.A.`, `doctor`, 5),
    teacher3 = new Teacher(`Pawlow M.M.`, `doctor`, 3),
    teacher4 = new Teacher(`Valerian M.C.`, 'docent', 4);
  let data = {
    [`${firstClassOfStudy.name}`]: [`${firstSubjectOfStudy.name} (${teacher1.fio}${teacher1.stepen})`, `${secondSubjectOfStudy.name}(${teacher2.fio}${teacher2.stepen})`, `${threadSubjectOfStudy.name}(${teacher3.fio}${teacher3.stepen})`],
    [`${secondClassOfStudy.name}`]: [`${fifthSubjectOfstudy.name}(${teacher4.fio}${teacher4.stepen})`, `${sixthSubjectOfStudy.name}(${teacher5.fio}${teacher5.stepen})`, `${firstSubjectOfStudy.name}(${teacher1.fio}${teacher1.stepen})`],
    [`${threadClassOfStudy.name}`]: [`${secondSubjectOfStudy.name}(${teacher2.fio}${teacher2.stepen})`, `${threadSubjectOfStudy.name}(${teacher3.fio}${teacher3.stepen})`, `${firstSubjectOfStudy.name}(${teacher1.fio}${teacher1.stepen})`]
  }
  let StudentsInGroup
  let student1 = new Student(`first S.U.`, 1), student2 = new Student(`Second S.U.`, 2), student3 = new Student(`Thread S.U.`, 3);
  let student4 = new Student(`fifth S.I.`, 4), student5 = new Student(`Five U.L.`, 5), student6 = new Student(`Six S.T.`, 6),
    student7 = new Student(`seven S.I.`, 4), student8 = new Student(`Mikle8 U.L.`, 5), student9 = new Student(`Jorj9 S.T.`, 6);
  let firstGroupStudentList = [student1.fio, student2.fio, student3.fio], secondGroupStudentList = [student4.fio, student5.fio, student6.fio], threadStudentGroupList = [student7.fio, student8.fio, student9.fio];
  let listOFstudentsFirst = [firstGroupStudentList, secondGroupStudentList, threadStudentGroupList];
  // let firstUrok = new Urok(1, `${firstSubjectOfStudy.id}`, `${teacher1.id}`, `${firstClassOfStudy.id}`, `30.05.2019`, `${student1.id}`);
  let dateOfClass = [`15.06.2020`, `16.06.2020`, `17.06.2020`, `19.06.2020`, `20.06.2020`];


  let keys = Object.keys(data);
  let divWithListOfGroup = document.getElementsByClassName('group')[0];
  divWithListOfGroup.innerHTML = `<u>Список групп </u>`;
  keys.map((item, index) => {
    let group = item, groupIndex = index;

    let firstP = document.createElement(`p`);
    firstP.className = 'p-In-First-Div';
    divWithListOfGroup.appendChild(firstP);
    firstP.innerHTML = `${item}`;
    firstP.onclick = () => {
      let secondDiv = document.getElementsByClassName('wrapper')[0];
      secondDiv.innerHTML = `<u>Список предметов обучения </u>`;
      data[item].map((item, index) => {
        let secondDivPClasses = document.createElement(`p`);
        secondDiv.appendChild(secondDivPClasses);
        secondDivPClasses.className = 'socond-div-for-rem';
        secondDivPClasses.innerHTML = `${item} `;

        secondDivPClasses.onclick = () => {
          let table = document.createElement(`table`);
          let tableDiv = document.getElementsByClassName(`table-container`)[0];
          tableDiv.innerHTML = `<u>Информация о посещаемости </u><br/> 
          Посещаемость занятий по предмету обучения<br/>
          «${item}» студентами группы «${group}»<br/>`;

          let nowList = listOFstudentsFirst[groupIndex];
          let place = false;

          for (let i = 0; i < nowList.length + 1; i++) {
            let b = i;
            let tr = document.createElement('tr');

            if (i == 0) {
              let td = document.createElement(`td`);
              td.innerHTML = `фамилия\\дата`;
              tr.appendChild(td);
              for (let j = 0; j < dateOfClass.length; j++) {
                let td = document.createElement(`td`);
                td.innerHTML = `${dateOfClass[j]}`;
                tr.appendChild(td);
              }
            } else {
              let td = document.createElement(`td`);
              td.innerHTML = `${nowList[i - 1]}`;
              tr.appendChild(td);
              for (b = 0; b < dateOfClass.length; b++) {
                let td = document.createElement(`td`);

                td.innerHTML = `${place ? "присутствовал" : 'отсутствовал'}`;
                place = !place;
                tr.appendChild(td);
              }
            }
            table.appendChild(tr);
          }



          tableDiv.appendChild(table);






        }
      }
      )








    }

  });






})()

