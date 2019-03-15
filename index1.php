<?

class Person
{
    public $name, $arr_cars=array();
    function __construct($name){
        $this->name=$name;
        $this->arr_cars=$arr_cars=array();
    }

    function myName(){
        echo '<script> console.log("Меня зовут '.$this->name.'");</script>';
    }
    function myCars(){
        if ($this->arr_cars==null){
            echo '<script> console.log("Я '.$this->name.' и у меня нет машин!");</script>';
        }
        else{
            $text=array();
            for($i=0; $i<count($this->arr_cars); $i++){
            array_push($text, 'и '.$this->arr_cars[$i]['model'].' '. $this->arr_cars[$i]['type'].' ');
        }
        $text1=array_shift($text);
        echo '<script> console.log("Я '.$this->name.' и у меня есть '.$text1.'.'.implode($text).'");</script>';
        }
    }
    function buyCar($car){
        array_push($this->arr_cars, array('model'=>$car->model, 'type'=>$car->type, 'cost'=>$car->cost));
        echo '<script> console.log("Новость! '.$this->name.' купил '.$car->model.' '. $car->type.' за '.$car->cost.'");</script>';
    }
}

class Car
{
    public $model, $type, $cost;
    function __construct($model, $type, $cost){
        $this->model=$model;
        $this->type=$type;
        $this->cost=$cost;
    }

}

$Vasiya = new Person("Вася");
$LADA = new Car("Lada", "sedan", 1000);
$Vasiya -> myName();
$Vasiya -> buyCar($LADA);
$Vasiya -> buyCar($LADA);
$Vasiya -> myCars();

?>