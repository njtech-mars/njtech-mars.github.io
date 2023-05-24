import FaLinux from "svelte-icons/fa/FaLinux.svelte";
import FaAward from "svelte-icons/fa/FaAward.svelte";
import FaFlask from "svelte-icons/fa/FaFlask.svelte";
import MdSchool from "svelte-icons/md/MdSchool.svelte";
import FaServer from "svelte-icons/fa/FaServer.svelte";
import FaUbuntu from "svelte-icons/fa/FaUbuntu.svelte";
import DiScriptcs from "svelte-icons/di/DiScriptcs.svelte";
import FaBandcamp from "svelte-icons/fa/FaBandcamp.svelte";
import MdComputer from "svelte-icons/md/MdComputer.svelte";
import FaMicrosoft from "svelte-icons/fa/FaMicrosoft.svelte";
import FaInfoCircle from "svelte-icons/fa/FaInfoCircle.svelte";
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
    name: "南工快传",
    icon: FaServer,
    link: "https://send.online.njtech.edu.cn",
    subtitle: "校内短期存储网盘服务",
    tags: ["校内", "存储"],
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
    name: "南工正版化平台",
    icon: FaMicrosoft,
    link: "https://soft.njtech.edu.cn",
    subtitle: "微软，Abode，Autodesk等正版化",
    tags: ["校内", "软件"],
    heat: 0.85,
    pinned: true
  },
  {
    name: "南工镜像站",
    icon: FaUbuntu,
    link: "https://mirrors.njtech.edu.cn",
    subtitle: "南工自己的镜像站",
    tags: ["校内", "镜像站"],
    heat: 0.85,
    pinned: true
  },
  {
    name: "远景实验室",
    icon: FaFlask,
    link: "https://www.vistalab.top",
    subtitle: "计院学生组织，机器人学习",
    tags: ["校内", "组织"],
    heat: 0.85,
    pinned: true
  },
  {
    name: "校科协",
    icon: FaAward,
    link: "https://njtustas.github.io",
    subtitle: "南工校科协，涵盖电子，航模，编程，静模",
    tags: ["校内", "组织"],
    heat: 0.85,
    pinned: false
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
    icon: FaBandcamp,
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
  },
  {
    name: "CS自学指南",
    icon: DiScriptcs,
    link: "https://csdiy.wiki",
    subtitle: "一本计算机的自学指南",
    tags: ["校外", "计算机", "学习"],
    heat: 0.8,
    pinned: false
  },
  {
    name: "OI WIKI",
    icon: FaInfoCircle,
    link: "https://oi.wiki",
    subtitle: "一个优秀的编程竞赛知识整合站",
    tags: ["校外", "计算机", "学习"],
    heat: 0.8,
    pinned: false
  }
];

export default data;
