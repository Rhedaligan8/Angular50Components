import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { DisplaynameComponent } from './components/displayname/displayname.component';
import { CounterComponent } from './components/counter/counter.component';
import { SimpleformComponent } from './components/simpleform/simpleform.component';
import { UserageComponent } from './components/userage/userage.component';
import { UsergreetingComponent } from './components/usergreeting/usergreeting.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { TextlengthComponent } from './components/textlength/textlength.component';
import { CurrencyconverterComponent } from './components/currencyconverter/currencyconverter.component';
import { EvenoddcheckerComponent } from './components/evenoddchecker/evenoddchecker.component';
import { WordreverserComponent } from './components/wordreverser/wordreverser.component';
import { ShowdateComponent } from './components/showdate/showdate.component';
import { ShowusernameComponent } from './components/showusername/showusername.component';
import { MultiplicationtableComponent } from './components/multiplicationtable/multiplicationtable.component';
import { SimpleloginComponent } from './components/simplelogin/simplelogin.component';
import { FahrenheittocelciusComponent } from './components/fahrenheittocelcius/fahrenheittocelcius.component';
import { BookmarklistComponent } from './components/bookmarklist/bookmarklist.component';
import { CharactercounterComponent } from './components/charactercounter/charactercounter.component';
import { PalindromecheckerComponent } from './components/palindromechecker/palindromechecker.component';
import { TemperatureconverterComponent } from './components/temperatureconverter/temperatureconverter.component';
import { ShoppinglistComponent } from './components/shoppinglist/shoppinglist.component';
import { FactorialcalculatorComponent } from './components/factorialcalculator/factorialcalculator.component';
import { GuessnumbergameComponent } from './components/guessnumbergame/guessnumbergame.component';
import { WordcounterComponent } from './components/wordcounter/wordcounter.component';
import { RandomnumbergeneratorComponent } from './components/randomnumbergenerator/randomnumbergenerator.component';
import { MultiplicationcheckerComponent } from './components/multiplicationchecker/multiplicationchecker.component';
import { UppercaseconverterComponent } from './components/uppercaseconverter/uppercaseconverter.component';
import { WordshufflerComponent } from './components/wordshuffler/wordshuffler.component';
import { BmisolverComponent } from './components/bmisolver/bmisolver.component';
import { UsernamevalidatorComponent } from './components/usernamevalidator/usernamevalidator.component';
import { InterestcalculatorComponent } from './components/interestcalculator/interestcalculator.component';
import { CompoundinterestcalculatorComponent } from './components/compoundinterestcalculator/compoundinterestcalculator.component';
import { FibonaccigeneratorComponent } from './components/fibonaccigenerator/fibonaccigenerator.component';
import { OddsumcalculatorComponent } from './components/oddsumcalculator/oddsumcalculator.component';
import { CurrencyformatterComponent } from './components/currencyformatter/currencyformatter.component';
import { RandomquotedisplayComponent } from './components/randomquotedisplay/randomquotedisplay.component';
import { UppercasegreetingComponent } from './components/uppercasegreeting/uppercasegreeting.component';
import { DivisiblecheckerComponent } from './components/divisiblechecker/divisiblechecker.component';
import { RouterModule, Routes } from '@angular/router';
import { config } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { TodomanagerComponent } from './components/todomanager/todomanager.component';
import { ChangecolorComponent } from './components/changecolor/changecolor.component';
import { EmojigeneratorComponent } from './components/emojigenerator/emojigenerator.component';
import { PasswordstrengthComponent } from './components/passwordstrength/passwordstrength.component';
import { ColorpickerComponent } from './components/colorpicker/colorpicker.component';
import { SimplequizComponent } from './components/simplequiz/simplequiz.component';
import { TimerComponent } from './components/timer/timer.component';
import { ColornametohexComponent } from './components/colornametohex/colornametohex.component';
import { ContactlistComponent } from './components/contactlist/contactlist.component';
import { JokegeneratorComponent } from './components/jokegenerator/jokegenerator.component';
import { SentencecaseconverterComponent } from './components/sentencecaseconverter/sentencecaseconverter.component';

const routes : Routes = [

  {path:'',component:DisplayhelloworldComponent},
  {path:'showhellobutton',component:ShowhellobuttonComponent},
  {path:'displayname',component:DisplaynameComponent},
  {path:'counter', component:CounterComponent},
  {path:'simpleform',component:SimpleformComponent},
  {path:'userage', component:UserageComponent},
  {path:'usergreeting',component:UsergreetingComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'textlength',component:TextlengthComponent},
  {path:'currencyconverter',component:CurrencyconverterComponent},
  {path:'evenoddchecker', component:EvenoddcheckerComponent},
  {path:'wordreverser', component:WordreverserComponent},
  {path:'showusername', component:ShowusernameComponent},
  {path:'multiplicationtable', component: MultiplicationtableComponent},
  {path:'simplelogin', component:SimpleloginComponent},
  {path:'bookmarklist', component:BookmarklistComponent},
  {path:'charactercounter', component:CharactercounterComponent},
  {path:'palindrome', component:PalindromecheckerComponent},
  {path:'temperatureconvert', component:TemperatureconverterComponent},
  {path:'shoppinglist', component:ShoppinglistComponent},
  {path:'factorialnumber', component:FactorialcalculatorComponent},
  {path:'todomanager', component:TodomanagerComponent},
  {path:'guessnumbergame', component:GuessnumbergameComponent},
  {path:'wordcounter',component:WordcounterComponent},
  {path:'randomnumbergenerator',component:RandomnumbergeneratorComponent},
  {path:'multiplicationchecker', component:MultiplicationcheckerComponent},
  {path:'convertuppercase', component:UppercaseconverterComponent},
  {path:'wordshuffler', component:WordshufflerComponent},
  {path:'bmisolver', component:BmisolverComponent},
  {path:'usernamevalidator', component:UsernamevalidatorComponent},
  {path:'interestcalculator', component:InterestcalculatorComponent},
  {path:'compoundinterestcalculator', component:CompoundinterestcalculatorComponent},
  {path:'fibonaccigenerator', component:FibonaccigeneratorComponent},
  {path:'oddsumcalculator', component:OddsumcalculatorComponent},
  {path:'currencyformatter',component:CurrencyformatterComponent},
  {path:'randomquotedisplay', component:RandomquotedisplayComponent},
  {path:'uppercasegreeting', component:UppercasegreetingComponent},
  {path:'divisiblechecker',component:DivisiblecheckerComponent},
  {path:'changecolor',component:ChangecolorComponent},
  {path:'emojigenerator', component:EmojigeneratorComponent},
  {path:'passwordstrength', component:PasswordstrengthComponent},
  {path:'colorpicker', component:ColorpickerComponent},
  {path:'simplequiz',component:SimplequizComponent},
  {path:'timer',component:TimerComponent},
  {path:'colornametohex', component:ColornametohexComponent},
  {path:'contactlist', component:ContactlistComponent},
  {path:'jokegenerator', component:JokegeneratorComponent},
  {path:'sentencecaseconverter',component:SentencecaseconverterComponent},

  
]
@NgModule({
  declarations: [
    AppComponent,
    DisplayhelloworldComponent,
    ShowhellobuttonComponent,
    DisplaynameComponent,
    CounterComponent,
    SimpleformComponent,
    UserageComponent,
    UsergreetingComponent,
    CalculatorComponent,
    TextlengthComponent,
    CurrencyconverterComponent,
    EvenoddcheckerComponent,
    WordreverserComponent,
    ShowdateComponent,
    ShowusernameComponent,
    MultiplicationtableComponent,
    SimpleloginComponent,
    FahrenheittocelciusComponent,
    BookmarklistComponent,
    CharactercounterComponent,
    PalindromecheckerComponent,
    TemperatureconverterComponent,
    ShoppinglistComponent,
    FactorialcalculatorComponent,
    GuessnumbergameComponent,
    WordcounterComponent,
    RandomnumbergeneratorComponent,
    MultiplicationcheckerComponent,
    UppercaseconverterComponent,
    WordshufflerComponent,
    BmisolverComponent,
    UsernamevalidatorComponent,
    InterestcalculatorComponent,
    CompoundinterestcalculatorComponent,
    FibonaccigeneratorComponent,
    OddsumcalculatorComponent,
    CurrencyformatterComponent,
    RandomquotedisplayComponent,
    UppercasegreetingComponent,
    DivisiblecheckerComponent,
    TodomanagerComponent,
    ChangecolorComponent,
    EmojigeneratorComponent,
    PasswordstrengthComponent,
    ColorpickerComponent,
    SimplequizComponent,
    ColornametohexComponent,
    ContactlistComponent,
    JokegeneratorComponent,
    SentencecaseconverterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes, {enableTracing:true})
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
