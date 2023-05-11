import FaLinux from "svelte-icons/fa/FaLinux.svelte";
import FaAward from "svelte-icons/fa/FaAward.svelte";
import FaFlask from "svelte-icons/fa/FaFlask.svelte";
import MdSchool from "svelte-icons/md/MdSchool.svelte";
import FaServer from "svelte-icons/fa/FaServer.svelte";
import FaDatabase from "svelte-icons/fa/FaDatabase.svelte";
import MdComputer from "svelte-icons/md/MdComputer.svelte";
import FaMicrosoft from "svelte-icons/fa/FaMicrosoft.svelte";
import FaLaptopCode from "svelte-icons/fa/FaLaptopCode.svelte";
import FaUserGraduate from "svelte-icons/fa/FaUserGraduate.svelte";
import MdOndemandVideo from "svelte-icons/md/MdOndemandVideo.svelte";

// 图标前往这个网址查找：https://svelte-icons.vercel.app/
const data = [
  {
    name: "南工在线",
    icon: MdOndemandVideo,
    link: "https://online.njtech.edu.cn",
    subtitle: "视频播放平台，软件下载",
    tags: ["校内", "视频"],
    heat: 0.9,
    pinned: true
  },
  {
    name: "南工OJ",
    icon: FaLaptopCode,
    link: "https://acm.online.njtech.edu.cn",
    subtitle: "在线评测，算法题库",
    tags: ["校内", "学习"],
    heat: 0.9,
    pinned: true
  },
  {
    name: "远景实验室",
    icon: FaFlask,
    link: "https://www.vistalab.top/",
    subtitle: "计院学生组织，机器人学习",
    tags: ["校内", "组织"],
    heat: 0.9,
    pinned: true
  },
  {
    name: "南工正版化平台",
    icon: FaMicrosoft,
    link: "https://soft.njtech.edu.cn",
    subtitle: "微软，Abode，Autodesk，NoteExpress正版化",
    tags: ["校内", "软件"],
    heat: 0.85,
    pinned: true
  },
  {
    name: "南工镜像站",
    icon: FaDatabase,
    link: "https://mirrors.njtech.edu.cn",
    subtitle: "南工自己的镜像站",
    tags: ["校内", "镜像站"],
    heat: 0.85,
    pinned: true
  },
  {
    name: "校科协",
    icon: FaAward,
    link: "https://njtustas.github.io/",
    subtitle: "南工校科协，涵盖电子，航模，编程，静模",
    tags: ["校内", "组织"],
    heat: 0.9,
    pinned: true
  },
  {
    name: "教务系统",
    icon: FaUserGraduate,
    link: "https://jwgl.njtech.edu.cn",
    subtitle: "选课，退课，课表，成绩查询",
    tags: ["校内", "学习"],
    heat: 0.8,
    pinned: false
  },
  {
    name: "南工MC",
    icon: FaServer,
    link: "https://wiki.mualliance.ltd/南京工业大学服务器",
    subtitle: "南工民间MC组织，校内MC服务器",
    tags: ["校内", "组织"],
    heat: 0.85,
    pinned: false
  },
  {
    name: "清华大学tuna协会",
    icon: MdSchool,
    link: "https://tuna.moe",
    subtitle: "清华大学tuna协会",
    tags: ["校外", "镜像站"],
    heat: 0.8,
    pinned: false
  },
  {
    name: "中国科学技术大学Linux用户协会",
    icon: FaLinux,
    link: "https://lug.ustc.edu.cn",
    subtitle: "中国科学技术大学Linux用户协会",
    tags: ["校外", "组织", "计算机"],
    heat: 0.8,
    pinned: false
  },
  {
    name: "南方科技大学计算机研究协会",
    icon: MdComputer,
    link: "https://www.cra.moe",
    subtitle: "南方科技大学计算机研究协会",
    tags: ["校外", "组织", "计算机"],
    heat: 0.8,
    pinned: false
  }
];

export default data;
