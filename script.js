document.addEventListener('DOMContentLoaded', () => {
    // セクションのアニメーション
    const animateSections = () => {
        const sections = document.querySelectorAll('.animate-section');
        
        sections.forEach(section => {
            // セクションの位置情報
            const sectionTop = section.getBoundingClientRect().top;
            const triggerPosition = window.innerHeight * 0.8; // 画面の80%位置でトリガー
            
            // セクションが表示位置に来たら.activeクラスを追加
            if (sectionTop < triggerPosition) {
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
}); 