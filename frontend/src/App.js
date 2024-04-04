import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


//clubs
import ListHome from './components/ListHome';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import ClubHome from './components/ClubHome';
import AstronomyHome from './components/AstronomyHome';
import Astronomyvideoslink from './components/Astronomyvideoslink';
import QuizHome from './components/QuizHome';
import SportsHome from './components/SportsHome';
import PrintPreview from './components/PrintPreview'
import QuizApp from './components/QuizApp'
import AstromyGameLink from './components/AstromyGameLink';

//components
import StudentLoginPage from './components/StudentLoginPage';
import Navbar from './components/Navbar';
import TeacherDashbord from './components/TeacherDashbord';
import AdminTeacherDashbord from './pages/TeachersManagement/AdminTeacherDashbord';
import AdminStudentDashbord from './components/AdminStudentDashbord';
import StudentDashbord from './components/StudentDashbord';
import AdminDashbord from './components/AdminDashbord';
import AdminLoginPage from './components/AdminLoginPage';
import HomePage from './components/HomePage';


//Teacher Management
import TeacherProfileView from './pages/TeachersManagement/TeacherProfileView';
import AddTeacher from './pages/TeachersManagement/AddTeacher';
import TeacherTable from './pages/TeachersManagement/TeacherTable';
import LeaveForm from './pages/TeachersManagement/LeaveForm';
import UpdateTeacher from './pages/TeachersManagement/UpdateTeacher';
import LeaveTable from './pages/TeachersManagement/LeaveTable';
import TeacherLoginPage from './components/TeacherLoginPage';

//Student Management
import StudentProfileView from './pages/StudentsManagement/StudentProfileView';
import StudentRegisteration from './pages/StudentsManagement/StudentRegisteration';
import StudentUpdate from './pages/StudentsManagement/StudentUpdate';
import StudentTable from './pages/StudentsManagement/StudentTable';
import GenerateStudentReport from './pages/StudentsManagement/GenerateStudentReport';
import AdminStudentProfileView from './pages/StudentsManagement/AdminStudentProfileView';
import AdminTeacherProfileView from './pages/TeachersManagement/AdminTeacherProfileView';
import AdminHome from './pages/TimetableManagement/AdminHome/AdminHome'
import Subjects from './pages/TimetableManagement/SubjectManagement/AllSubjects/Subjects'
import AddSubject from './pages/TimetableManagement/SubjectManagement/AddSubject/AddSubject'
import Teachers from './pages/TimetableManagement/Teachers/Teachers'
import AddTeacherJ from './pages/TimetableManagement/Teachers/AddTeacher/AddTeacher'
import AddClass from './pages/TimetableManagement/AddClass/AddClass'
import Classes from './pages/TimetableManagement/Classes/Classes'
import GenerateTimeTable from './pages/TimetableManagement/GenerateTimetable/GenerateTimetable'
import AllClassTimetables from './pages/TimetableManagement/AllClassTimetables'
import AllExamTimetables from './pages/TimetableManagement/AllExamTimetables'
import ClassTimeTable from './pages/TimetableManagement/ClassTimetable'
import ExamTimetable from './pages/TimetableManagement/ExamTimetable'


//class management
import ClassNoticeAdmin from './pages/ClassManagement/ClassNoticeAdmin';
import ClassnoticeFormEdit from './pages/ClassManagement/ClassnoticeFormEdit';
import ClassNotice from './pages/ClassManagement/ClassNotice'
import ALbio from './pages/ClassManagement/ALbio'
import ALmaths from './pages/ClassManagement/ALmaths'
import ALcommerce from './pages/ClassManagement/ALcommerce'
import ALtech from './pages/ClassManagement/ALtech'
import ALarts from './pages/ClassManagement/ALarts'
import ALbioView from './pages/ClassManagement/ALbioView'
import ALmathsView from './pages/ClassManagement/ALmathsView'
import ALcommerceView from './pages/ClassManagement/ALcommerceView'
import ALtechView from './pages/ClassManagement/ALtechView'
import ALartsView from './pages/ClassManagement/ALartsView'


import AddDriverTrns from './pages/TransportManagement/AddDriverTrns';
import AddStudentTrns from './pages/TransportManagement/AddStudentTrns';
import Vehicle from './pages/TransportManagement/Vehicle';
import TrnsStudentLeave from './pages/TransportManagement/TrnsStudentLeave';
import AllDriverTrns from './pages/TransportManagement/AllDriverTrns';
import UptateDriver from './pages/TransportManagement/UptateDriver';
import AllStudentTrns from './pages/TransportManagement/AllStudentTrns';
import UptateStudent from './pages/TransportManagement/UptateStudent';
import AdminTransportDashbord from './components/AdminTransportDashbord';

//Exam management
import AddExam from './pages/ExamManagement/AddExam';
import ExamTable from './pages/ExamManagement/ExamTable';
import ExamTableStudent from './pages/ExamManagement/ExamTableStudent';
import UpdateExam from './pages/ExamManagement/UpdateExam';
import Question from './pages/ExamManagement/Question';
import AddQuestion from './pages/ExamManagement/AddQuestion';
import UpdateQuestion from './pages/ExamManagement/UpdateQuestion'; 
import NextQuestion from './pages/ExamManagement/NextQuestion'; 
import Questionteacher from './pages/ExamManagement/Questionteacher'; 
import AttemptyQuiz from './pages/ExamManagement/AttemptyQuiz';
import TeacherStudentDashboard from './pages/ExamManagement/TeacherStudentDashboard';
import StudentExams from './pages/ExamManagement/StudentExams';
import SMdashboard_T from './pages/ClassManagement/SMdashboard_T';
import SMdashboard_S from './pages/ClassManagement/SMdashboard_S';


//AllStudendsTrns
//TrnsStudentLeave

//AllStudendsTrns
//TrnsStudentLeave

function App() {

  return (
    <Router>
      <div>
        <Navbar/>

        <Routes>
          //clubs
          <Route path="/ListHome" element={<ListHome/>}/>
          <Route path="/CreatePost" element={<CreatePost/>}/>
         <Route path="/EditPost/:id" element={<EditPost/>}/>
         <Route path="/ClubHome" element={<ClubHome/>}/>
         <Route path="/AstronomyHome" element={<AstronomyHome/>}/>
         <Route path="/Astronomyvideoslink" element={<Astronomyvideoslink/>}/>
         <Route path="/QuizHome" element={<QuizHome/>}/>
         <Route path="/SportsHome" element={<SportsHome/>}/>
         <Route path ="/print" element={<PrintPreview/>}/>
          <Route path ="/QuizApp" element={<QuizApp/>}/>
          <Route path="/AstromyGameLink" element={<AstromyGameLink/>}/>
    
          //components
          <Route  path='/studentloginpage' element={<StudentLoginPage />} />
          <Route  path='/studentdashbord' element={<StudentDashbord />} />
          <Route  path='/admindashboardstudent' element={<AdminStudentDashbord />} />
          <Route path='/AdminDashbord' element={<AdminDashbord/>} />
          <Route path="/teacherdashboard" element={<AdminTeacherDashbord/>} />
          <Route path="/teacher-dashboard" element={<TeacherDashbord />}/>
          <Route path="/adminloginpage" element={<AdminLoginPage />}/>
          <Route path="/" element={<HomePage />}/>
          <Route path="/teacherloginpage" element={<TeacherLoginPage />} />
         
          //Teacher MS
          <Route path="/addteacher" element={<AddTeacher />} />
          <Route exact path="/profile/teacher/:id" element={< TeacherProfileView/>} />
          <Route exact path="/Adminprofile/teacher/:id" element={<AdminTeacherProfileView/>} />
          <Route path="/add-search-teachers" element={< TeacherTable/>} />
          <Route path="/leave-form" element={<LeaveForm />}/>
          <Route path="/updateteacher/teacher/:id" element={<UpdateTeacher />}/>
          <Route path="/leaveTable" element={<LeaveTable />}/>

          //Student MS
          <Route path='/addstudent' element={<StudentRegisteration/>} />
          <Route exact path='/profile/student/:id' element={<StudentProfileView />} />
          <Route exact path='/Adminprofile/student/:id' element={<AdminStudentProfileView />} />
          <Route  path='/studentlist' element={<StudentTable />} />
          <Route path="/generatereport" element={<GenerateStudentReport />} />
          

          //Timetable Ms
          <Route path="/Subjects" exact element={<Subjects/>} />
          <Route path="/Subjects/Add" exact element={<AddSubject />} />
          <Route path="/teachers" exact element={<Teachers/>} />
          <Route path="/teachers/add" exact element={<AddTeacherJ />} />
          <Route path="/Classes/add" exact element={<AddClass/>} />
          <Route path="/Classes" exact element={<Classes />} />
          <Route path="/AdminHome" exact element={<AdminHome/>} />
          <Route path="/GenerateTimetable" exact element={<GenerateTimeTable />} />
          <Route path="/ClassTimetable/:id" exact element={<ClassTimeTable />} />
          <Route path="/AllClassTimetables" exact element={<AllClassTimetables />} />
          <Route path="/AllExamTimetables" exact element={<AllExamTimetables/>} />
          <Route path="/ExamTimetable/:id" exact element={<ExamTimetable />} />


         //Class Ms
          <Route path="/ClassnoticeFormEdit/:id" element={<ClassnoticeFormEdit/>} />
          <Route path="/ClassNoticeAdmin" element={<ClassNoticeAdmin />} />
          <Route path="/ClassNotice" element={<ClassNotice/>} />
          <Route path="/ALbio" element={<ALbio/>} />
          <Route path="/ALmaths" element={<ALmaths/>} />   
          <Route path="/ALcommerce" element={<ALcommerce/>} />
          <Route path="/ALtech" element={<ALtech/>} />
          <Route path="/ALarts" element={<ALarts/>} />   
          <Route path="/ALbioView" element={<ALbioView/>} />
          <Route path="/ALmathsView" element={<ALmathsView/>} />    
          <Route path="/ALcommerceView" element={<ALcommerceView/>} /> 
          <Route path="/ALtechView" element={<ALtechView/>} /> 
          <Route path="/ALartsView" element={<ALartsView/>} />
          <Route path="/SMdashboard_T" element={<SMdashboard_T/>}/>
          <Route path="/SMdashboard_S" element={<SMdashboard_S/>}/>

          //Trnasport Ms
          <Route path="/AllStudentTrns" element={<AllStudentTrns />} />
          <Route path="/UptateStudent/transportStudent/:id" element={<UptateStudent />} />
          <Route path="/admintransportdashbord" element={<AdminTransportDashbord />} />
          <Route path="/TrnsStudentLeave" element={<TrnsStudentLeave />} />
          <Route path="/AllDriverTrns" element={<AllDriverTrns />} />
          <Route path="/UptateDriver/transportDriver/:id" element={<UptateDriver />} />

          //Exam management
          <Route path="/addexam" element={<AddExam />} />
          <Route path="/examtable" element={<ExamTable />} />
          <Route path="/examtableST" element={< ExamTableStudent/>} />
          <Route path="/attemptQuiz/:id" element={< AttemptyQuiz/>} />
          <Route path="/updateexam/exam/:id" element={< UpdateExam/>} />
          <Route path="/question" element={< Question/>} />
          <Route path="/addquestion" element={< AddQuestion/>} />
          <Route path="/updatequestion/question/:id" element={< UpdateQuestion/>} />
          <Route path="/NextQuestion" element={< NextQuestion/>} />
          <Route path="/Questionteacher" element={< Questionteacher/>} />
          <Route path="/teacherstudentdashboard" element={< TeacherStudentDashboard/>} />
          <Route path="/studentExams" element={< StudentExams/>} />
          <Route path="/updatestudent/student/:id" element={<StudentUpdate />} />
          <Route path="/addDriver" element={<AddDriverTrns />} />
          <Route path="/addTrnsStudent" element={<AddStudentTrns />} />
          <Route path="/Vehicle" element={<Vehicle />} />
          

          
          
          
         
          
        </Routes>
        
      </div>
    </Router>
    
  );
}

export default App;

