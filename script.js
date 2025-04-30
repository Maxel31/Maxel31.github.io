document.addEventListener('DOMContentLoaded', () => {
    // セクションのアニメーション
    const animateSections = () => {
        const sections = document.querySelectorAll('.animate-section');
        
        sections.forEach(section => {
            // セクションの位置情報
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            // セクションが表示位置に来たら.activeクラスを追加
            if (sectionTop < windowHeight * 0.75) {
                section.classList.add('active');
            }
        });
    };
    
    // ページロード時に一度実行
    animateSections();
    
    // スクロール時にもアニメーション処理を実行
    window.addEventListener('scroll', animateSections);
    
    // スムーズスクロール
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // ヘッダー分の調整
                    behavior: 'smooth'
                });
            }
        });
    });

    // ヘッダーのスクロール制御
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // 下にスクロールしているときはヘッダーを隠す
        if (scrollTop > lastScrollTop && scrollTop > headerHeight) {
            header.style.transform = 'translateY(-100%)';
        } 
        // 上にスクロールしているときはヘッダーを表示
        else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}); 