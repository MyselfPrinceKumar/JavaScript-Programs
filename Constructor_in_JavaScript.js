class RailwayForm {
    constructor(nname, ntrain, naddress) {
        this.name = nname;
        this.train = ntrain;
        this.address = naddress;
    }
    submitForm() {
        console.log(this.name + ": Your Form is Submitted for train No." + this.train + " for " + this.address)
    }
    Cancelled() {

        console.log(this.name + ": Your Form is Cancelled For train No " + this.train + " for " + this.address)
    }

}
let rock = new RailwayForm("pricne", 34, "pasarma");
let shubham = new RailwayForm("subham", 23, "Konhwa");
rock.submitForm();
rock.Cancelled();
shubham.submitForm();
shubham.Cancelled();