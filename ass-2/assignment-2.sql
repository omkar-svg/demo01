create database sunbeam_db;
use sunbeam_db;

create table users (
  email varchar(20) primary key,
  password varchar(20) ,
  role enum ('admin','student')
);

create table students(
   reg_no int auto_increment primary key,
   name varchar(20) ,
   email varchar(20),
   course_id int,
   mobile_no int,
   profile_pic blob,
   constraint fk2 foreign key (course_id) references courses(course_id) on update cascade on delete cascade,
   constraint fk3 foreign key (email) references users(email) on update cascade on delete cascade
);

create table courses(
  course_id int  primary key,
  course_name varchar(20),
  description varchar(40),
  fees int,
  start_date date,
  end_date date,
  video_expire_days int
);

create table videos(
  video_id int primary key ,
  course_id int,
  title int,
  description varchar(40),
  youtube_url varchar(20),
  added_at date,
  constraint fk1 foreign key (course_id) references courses(course_id) on update cascade on delete cascade
);

alter table videos modify column title varchar(20);

drop table videos;

show tables;

insert into users values('ogamil.com','12334','student'),
('lkgamil.com','12364','student'),
('pogamil.com','13554','student');

insert into courses values(1,'IIT-MERN-2025','MERN',4000,'2025-12-20','2026-01-20',30),
(7,'AI','some courserelated to AI',10000,'2025-12-24','2026-01-24',5),
(8,'Android','Android related course',9999,'2025-12-24','2026-01-24',7),
(11,'pythin','py',10000,'2025-12-24','2026-01-24',20);

insert into students (name,email,mobile_no,course_id,profile_pic)values('student','ogamil.com','112332233',1,'0101001'),
('student','lkgamil.com','112332233',1,'00110101001'),
('student','pogamil.com','112332233',7,'010101');

insert into videos values (1,1,'title1','some thing','https/:youtube-rfn','2022-02-09'),
(2,1,'title1','some thing','https/:youtube-rjn','2028-02-06'),
(3,7,'title1','some thing','https/:youtube-rfjn','2025-02-07'),
(4,7,'title1','some thing','https/:youtube-rfn','2025-02-05');
insert into videos values (5,1,'title1','some thing','https/:youtube-rfn','2025-12-12');

  #1
select * from courses;

  #2
select reg_no,name,mobile_no,course_id,course_name 
from students natural join courses;
  
  #3
select reg_no,name,mobile_no,course_id,course_name,description,fees,start_date,end_date,video_expire_days
from students natural join courses;

  #4
DELIMITER $$

create procedure poc (in em varchar(20))
begin 
   select course_id,course_name,start_date,end_date,video_expire_days,video_id,title,added_at
   from students natural join courses natural join videos 
   where email = em and date_add(added_at ,INTERVAL video_expire_days day)  >= current_date();
   end $$
   
DELIMITER ;


call poc('pogamil.com');