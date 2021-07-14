//Task 1
function Robot(){
    var self = this;

    self.work = function(){
        console.log('Я Robot – я просто працюю')
    }
}

function CoffeRobot(){
    Robot.call(this);
    var self = this;
    
    self.work = function(){
        console.log('Я CoffeRobot – я варю каву')
    }
}

function RobotDancer(){
    Robot.call(this);
    var self = this;
    
    self.work = function(){
        console.log('Я RobotDancer – я просто танцюю')
    }
}

function RobotCoocker(){
    Robot.call(this);
    var self = this;
    
    self.work = function(){
        console.log('Я RobotCoocker – я просто готую')
    }
}

var rob = new Robot();
var rob1 = new CoffeRobot();
var rob2 = new RobotDancer();
var rob3 = new RobotCoocker();

var robarr = [rob,rob1,rob2,rob3];
robarr.forEach(e => e.work());

//Task 2

function Robot(){

}
Robot.prototype.work = function(){
    console.log('Я Robot – я просто працюю')
}

function CoffeRobot(){

}
CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = Robot;

CoffeRobot.prototype.work = function(){
    console.log('Я CoffeRobot – я варю каву')
}

function RobotDancer(){

}
RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = Robot;

RobotDancer.prototype.work = function(){
    console.log('Я RobotDancer – я просто танцюю')
}

function RobotCoocker(){

}
RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = Robot;

RobotCoocker.prototype.work = function(){
    console.log('Я RobotCoocker – я просто готую')
}

var rob = new Robot();
var rob1 = new CoffeRobot();
var rob2 = new RobotDancer();
var rob3 = new RobotCoocker();

var robarr = [rob,rob1,rob2,rob3];
robarr.forEach(e => e.work());