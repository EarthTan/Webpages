// 大纲导航交互功能
document.addEventListener('DOMContentLoaded', function() {
    // 获取所有导航链接和对应的section
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // 平滑滚动函数
    function smoothScroll(targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 100; // 减去一些偏移量，避免被顶部栏遮挡
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    // 为导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1); // 去掉#号
            smoothScroll(targetId);
            
            // 更新激活状态
            navLinks.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // 监听滚动事件，更新导航激活状态
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 150; // 添加一些偏移量
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // 移除所有激活状态
                navLinks.forEach(link => link.classList.remove('active'));
                
                // 添加当前section对应的导航激活状态
                const activeLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }
        });
    }
    
    // 初始化时更新一次激活状态
    updateActiveNav();
    
    // 监听滚动事件
    window.addEventListener('scroll', updateActiveNav);
    
    // 监听窗口大小变化，重新计算位置
    window.addEventListener('resize', updateActiveNav);
});
