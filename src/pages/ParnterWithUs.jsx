import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

function ParnterWithUs() {
  return (
    <Container className="section partner-page mt-5">
      <Row>
        <Col>
          <h1>Partner With Us</h1>
          <p className="muted">AI for Everyone is designed to be collaborative and inclusive. TinkerHub acts as the enabler and host of this campaign, holding space for partners and communities to lead, learn, and build together. We invite partners across sectors to join us.</p>

          <h3>1. Knowledge Partners</h3>
          <p>You have expertise to share.</p>
          <ul>
            <li><strong>Tech & Industry:</strong> AI companies contributing technical know-how, mentorship, product demos, and subject experts connecting AI to specific fields.</li>
            <li><strong>Education & Content:</strong> Educators and professionals designing curriculum, leading workshops, and creating learning materials.</li>
          </ul>

          <h3>2. Financial Partners</h3>
          <p>You provide funding.</p>
          <ul>
            <li><strong>Program Funding:</strong> Sponsor facilitator training, venue costs, program operations, and scaling to new districts.</li>
            <li><strong>Resource Funding:</strong> Pay for learning materials, hardware, printed resources, and kit distribution.</li>
          </ul>

          <h3>3. Media & Outreach Partners</h3>
          <p>You amplify our reach.</p>
          <ul>
            <li><strong>Traditional & Digital Media:</strong> Newspapers, TV, radio coverage, social media partnerships, and influencer collaborations.</li>
            <li><strong>Content & Stories:</strong> Videos, articles, podcasts, and local language content documenting the journey.</li>
          </ul>

          <h3>4. Resource Partners</h3>
          <p>You provide tools and materials to make learning hands-on.</p>
          <ul>
            <li><strong>Hardware & Software:</strong> Laptops, tablets, demo devices, and access to free or discounted AI tools, platforms and cloud credits for learners.</li>
            <li><strong>Materials & Support:</strong> Learning resources, books, course licenses, printed guides, kit distribution, and technical maintenance for deployed devices.</li>
          </ul>

          <h3>5. Community Partners</h3>
          <p>Host and facilitate learning on the ground.</p>
          <ul>
            <li><strong>Institutions & Organisations:</strong> Schools, libraries, NGOs, Kudumbashree units, and workplaces providing space and mobilising participants.</li>
            <li><strong>Individual Hosts:</strong> Community leaders and volunteers organising small learning circles, after-school clubs, or neighbourhood meetups.</li>
          </ul>

          <h2>How You Can Partner</h2>
          <p>This campaign is built on collaboration. Organisations, companies, and community groups can partner in multiple ways:</p>
          <ul>
            <li><strong>Host Learning Programs:</strong> Facilitate workshops, study circles, demo days or weekend labs for learners of all ages.</li>
            <li><strong>Volunteer & Mentor:</strong> Share domain expertise, guide projects, or train grassroots facilitators to sustain local activity.</li>
            <li><strong>Sponsor Toolkits & Programs:</strong> Help us distribute learning kits and fund program operations so we can scale to more districts.</li>
            <li><strong>Contribute to the Repository:</strong> Add real-world challenges, datasets, or project ideas that learners can use to build practical solutions.</li>
            <li><strong>Open Doors for Communities:</strong> Invite children, youth, teachers, or elders from your network to participate in AI literacy activities.</li>
            <li><strong>Provide Financial Support:</strong> We welcome funding to sustain and scale the initiative — details are available on our Support page or by contacting us directly.</li>
          </ul>

          <blockquote className="mt-3">“AI will shape the future of work, culture, and communities. Kerala can either be a consumer or a creator. With your partnership, we can ensure every Keralite learns, builds, and creates responsibly with AI. This is our chance to set a global model again, like we did with digital literacy.”</blockquote>

          <div className="mt-4">
            <p className="small muted">Interested in partnering? Tell us about your organisation and how you'd like to contribute.</p>
            <Button href="mailto:partners@tinkerhub.org" className="btn-primary">Contact Us</Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ParnterWithUs