const navItems = {
    navHome: document.getElementById('nav-home'),
    navVCP: document.getElementById('nav-vcp'),
    navGroups: document.getElementById('nav-groups'),
    navAbout: document.getElementById('nav-about'),
    navContact: document.getElementById('nav-contact'),
    navDummy: document.getElementById('wdummy')
}

const mnavItems = {
    navHome: document.getElementById('mnav-home'),
    navVCP: document.getElementById('mnav-vcp'),
    navGroups: document.getElementById('mnav-groups'),
    navAbout: document.getElementById('mnav-about'),
    navContact: document.getElementById('mnav-contact'),
    navDummy: document.getElementById('mdummy')
}

const scrlDots = {
    scrlHome: {
        dot: document.getElementById('scrl-home'),
        bg: 'bg-offwhite'
    },

    scrlVCP: {
        dot: document.getElementById('scrl-vcp'),
        bg: 'bg-blau'
    },

    scrlGroups: {
        dot: document.getElementById('scrl-groups'),
        bg: 'bg-feuergelb'
    },

    scrlSubgroups: {
        dot: document.getElementById('scrl-subgroups'),
        bg: 'bg-rainbow'
    },

    scrlAbout: {
        dot: document.getElementById('scrl-about'),
        bg: 'bg-feuerrot'
    },

    scrlContact: {
        dot: document.getElementById('scrl-contact'),
        bg: 'bg-erdbraun'
    }
}

window.addEventListener('scroll', function(){
    const sections = this.document.querySelectorAll('section');
    const triggerPoint = this.window.innerHeight / 2;

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const id = section.id;
        let nav = navItems.navHome;
        let mnav = mnavItems.navHome;
        let dot = scrlDots.scrlHome;

        if(id == 'sec-hero'){
            nav = navItems.navHome;
            mnav = mnavItems.navHome;
            dot = scrlDots.scrlHome;
        }else if(id == 'sec-vcp'){
            nav = navItems.navVCP;
            mnav = mnavItems.navVCP;
            dot = scrlDots.scrlVCP;
        }else if(id == 'sec-groups'){
            nav = navItems.navGroups;
            mnav = mnavItems.navGroups;
            dot = scrlDots.scrlGroups;
        }else if(id == 'sec-subgroups'){
            nav = navItems.navDummy;
            mnav = mnavItems.navDummy;
            dot = scrlDots.scrlSubgroups;
        }else if(id == 'sec-about'){
            nav = navItems.navAbout;
            mnav = mnavItems.navAbout;
            dot = scrlDots.scrlAbout;
        }else if(id == 'sec-contact'){
            nav = navItems.navContact;
            mnav = mnavItems.navContact;
            dot = scrlDots.scrlContact;
        }

        if(rect.top < triggerPoint && rect.bottom > triggerPoint) {
            nav.classList.add('nav-selected');
            mnav.classList.add('nav-selected');
            dot.dot.classList.add('scrl-selected');
            dot.dot.classList.add(dot.bg);
        }else{
            nav.classList.remove('nav-selected');
            mnav.classList.remove('nav-selected');
            dot.dot.classList.remove('scrl-selected');
            dot.dot.classList.remove(dot.bg);
        }
    });
});