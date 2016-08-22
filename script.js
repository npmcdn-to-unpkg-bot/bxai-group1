import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';
import 'bootstrap';

class Project extends React.Component {
    render() {
        return (
            <div className="project-board-row">
                <div className="project-logo">
                    <img className="project-image" src={this.props.logo}/>
                </div>
                <div className="project-info">
                    <div className="project-info-title">
                        <a href={this.props.url}>{this.props.name}</a>
                    </div>
                    <div className="project-info-brief">
                        {this.props.intro}
                    </div>
                </div>
            </div>
        )
    }
}

class Member extends React.Component {
    render() {
        return (
            <div className="member col-sm-3">
                <img className="member-photo img-circle" src={this.props.image}/>
                <div className="member-info">
                    <h3 className="member-info-name">
                        {this.props.name}
                    </h3>
                    <span className="member-info-title">
                    {this.props.title}
                </span>
                    <p className="member-info-bio">
                        {this.props.bio}
                    </p>
                </div>
            </div>
        )
    }
}

class ProjectList extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Social Entrepreneur Projects</h1>
                <div className="project-board">
                    <div className="project-board-header">
                        Featured Projects
                    </div>
                    <Project
                        name="Epic Homes"
                        logo="images/organizations/epic-homes.png"
                        url="https://www.epichome.org/"
                        intro="Building homes for underprivileged Malaysian communities"
                    />
                    <Project
                        name="D.Light"
                        logo="images/organizations/dlight.png"
                        url="https://www.dlight.org/"
                        intro="Durable, modern, human: Solar lighting & power for us all"
                    />
                    <Project
                        name="Green Monday"
                        logo="images/organizations/green-monday.png"
                        url="https://greenmonday.org/"
                        intro="Vegetarian promotion and food rescue initiatives"
                    />
                </div>
            </div>
        )
    }
}

class MemberList extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Team</h1>
                <div className="member-list">
                    <Member
                        name="Naveen"
                        title="Co-founder"
                        image="images/people/naveen.jpg"
                        bio="MBA, Hitotsubashi Graduate School of International Corporate Strategy"
                    />
                    <Member
                        name="Nothando"
                        title="Co-founder"
                        image="images/people/nothando.jpg"
                        bio="M.A. in China Studies, Yenching Academy of Peking University"
                    />
                    <Member
                        name="Ani"
                        title="Co-founder"
                        image="images/people/ani.jpg"
                        bio="M.A. in China Studies, Yenching Academy of Peking University"
                    />
                    <Member
                        name="Bairen"
                        title="Co-founder"
                        image="images/people/bairen.jpg"
                        bio="M.Phil. in Computer Science, Hong Kong University of Science and Technology"
                    />
                    <Member
                        name="Chia-Yi"
                        title="Co-founder"
                        image="images/people/miya.jpg"
                        bio="B.A. in Liberal Arts, Waseda University"
                    />
                    <Member
                        name="Jingtian"
                        title="Co-founder"
                        image="images/people/gao.jpg"
                        bio="M.A. in Public Administration, Kyoto University"
                    />
                    <Member
                        name="Lihang"
                        title="Co-founder"
                        image="images/people/lihang.jpg"
                        bio="B.A. in Political Science, Fudan University & Waseda University"
                    />
                    <Member
                        name="Mengshi"
                        title="Co-founder"
                        image="images/people/mengshi.jpg"
                        bio="Ph.D. candidate in Public Policy, Tokyo University"
                    />
                    <Member
                        name="Sarah Jung"
                        title="Co-founder"
                        image="images/people/sarah.jpg"
                        bio="M.A. in Public Administration, Zhejiang University"
                    />
                    <Member
                        name="Soo"
                        title="Co-founder"
                        image="images/people/soo.jpg"
                        bio="M.Phil. in Social Science, Hong Kong University of Science and Technology"
                    />
                    <Member
                        name="Shiyun"
                        title="Co-founder"
                        image="images/people/shiyun.jpg"
                        bio="B.A. in Political Science, Fudan University & Waseda University"
                    />
                    <Member
                        name="Yang"
                        title="Co-founder"
                        image="images/people/yang.jpg"
                        bio="B.A. in Political Science, Fudan University & Waseda University"
                    />
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <ProjectList />,
    document.getElementById("organization")
);

ReactDOM.render(
    <MemberList />,
    document.getElementById("team")
);