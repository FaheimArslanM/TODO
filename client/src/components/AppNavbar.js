import React, {Component} from 'react';
import {
    Collapse,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
	Navbar
} from 'reactstrap';

class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            isOpen: false
        });
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div>
				<Navbar color="dark" dark expand="sm" className="mb-5">
					<Container>
						<NavbarBrand href="/">TODO List</NavbarBrand>
						<NavbarToggler onClick={this.toggle}></NavbarToggler>
						<Collapse isOpen={this.state.isOpen} navbar>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink href="#">testLink</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</Container>
				</Navbar>
			</div>
        )
    }
}

export default AppNavbar;