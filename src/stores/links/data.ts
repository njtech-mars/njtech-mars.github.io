import MdSchool from 'svelte-icons/md/MdSchool.svelte';
import FaServer from 'svelte-icons/fa/FaServer.svelte';
import FaMicrosoft from 'svelte-icons/fa/FaMicrosoft.svelte';
import FaLaptopCode from 'svelte-icons/fa/FaLaptopCode.svelte';
import MdOndemandVideo from 'svelte-icons/md/MdOndemandVideo.svelte';

// 图标前往这个网址查找：https://svelte-icons.vercel.app/
const data = [
  {
    color: '#2563eb',
    name: '南工在线',
    icon: MdOndemandVideo,
    link: 'https://online.njtech.edu.cn',
    subtitle: '南工在线视频播放平台',
    tags: ['校内', '视频', '学习'],
    heat: 0.9
  },
  {
    color: '#4f46e5',
    name: '正版化平台',
    icon: FaMicrosoft,
    link: 'https://soft.njtech.edu.cn',
    subtitle: '南工正版化平台',
    tags: ['校内', '软件', '正版化'],
    heat: 0.7
  },
  {
    color: '#0d9488',
    name: '南工镜像站',
    icon: FaServer,
    link: 'https://mirrors.njtech.edu.cn',
    subtitle: '南工镜像站',
    tags: ['校内', '镜像站'],
    heat: 0.7
  },
  {
    color: '#65a30d',
    name: '南工在线评测系统',
    icon: FaLaptopCode,
    link: 'https://acm.online.njtech.edu.cn',
    subtitle: '南工在线评测系统',
    tags: ['校内', '学习'],
    heat: 0.9
  },
  {
    color: '#0ea5e9',
    name: '清华大学tuna协会',
    icon: MdSchool,
    link: 'https://tuna.moe',
    subtitle: '清华大学tuna协会',
    tags: ['校外', '清华', '学习', '镜像站'],
    heat: 0.9
  }
];

export default data;
