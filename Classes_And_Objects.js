class RailwayForm {
    submitForm() {
        console.log(this.name + ": Your Form is Submitted for train No." + this.train)
    }
    Cancelled() {

        console.log(this.name + ": Your Form is Cancelled For train No " + this.train)
    }
    data(givenname, train) {
        this.name = givenname;
        this.train = train;
    }
}
let rock = new RailwayForm();
let shubham = new RailwayForm();
shubham.data("hero", 100334)
rock.data("prince", 22496);
rock.submitForm();
rock.Cancelled();
shubham.submitForm();
shubham.Cancelled();