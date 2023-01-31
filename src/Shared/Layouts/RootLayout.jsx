
import PanelTab from "../Components/PanelTab";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import './RootLayout-style.css'

const RootLayout = ({ children }) => {
    return (
        <div className="root-layout">
            <Header />
                <div className="layout-center">
                    <PanelTab />
                    { children }
                </div>
            <Footer />
        </div>
    )
}

export default RootLayout;