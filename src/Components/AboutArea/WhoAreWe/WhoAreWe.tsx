import css from "./WhoAreWe.module.css";

function WhoAreWe(): JSX.Element {
    return (
        <div className={css.Container}>
			<p className={css.NiceText}>We are Northwind company...</p>
            <p className={css.CoolText}>W're open 24/7 !</p>
        </div>
    );
}

export default WhoAreWe;
