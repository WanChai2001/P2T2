import React, { Component } from 'react';
import './App.css';
const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(val => val.length > 0 && (valid = false));
  return valid;
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      n1: null,
      old: null,
      vaccine: null,
      vaccine2: null,
      errors: {
        name: 'กรอกชื่อของคุณให้ถูกต้อง',
        n1: 'คำนำหน้าของคุณ',
        old: 'อายุ',
        vaccine: 'วัคซีนเข็มที่ 1',
        vaccine2: 'วัคซีนเข็มที่ 2',
        symptoms: 'อาการ',
        symptoms2: 'อาการ',
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.errors);
    if (validateForm(this.state.errors)) {
      alert('ขอบคุณที่ทำแบบสำรวจกับเรา');
    } else {
      alert('กรอกข้อมูลผิด');
    }
  }
  handleChange(event) {
    let { name, value } = event.target;
    let errors = this.state.errors;
    console.log(name, value);
    switch (name) {
      case 'name':
        errors.name = value.length < 3 ?  '' : 'กรุณากรอกชื่อของคุณใหม่';
        break;
      case 'n1':
        errors.n1 = value.length > 0 ?  '' : 'กรุณากรอกคำนำหน้าของคุณ';
        break;
      case 'old':
        errors.old = value.length > 0 ?  '' : 'อายุของคุณ';
        break;
      case 'vaccine':
        errors.vaccine = value.length > 0 ? '' : 'เลือกวัคซีน';
        break;
      case 'vaccine2':
        errors.vaccine2 = value.length > 0 ? '' : 'เลือกวัคซีน';
        break;
      case 'vaccine2':
        errors.symptoms = value.length < 3 ? '' : 'โปรดระบุอาการใหม่อีกครั้ง';
        break;
      case 'symptoms2':
        errors.symptoms2 = value.length < 3 ? '' : 'โปรดระบุอาการใหม่อีกครั้ง';
        break;
      default:
        break;
    }
    this.setState({
      errors,
      [name]: value
    });
  }
  render() {
    console.log(this.state);
    let { errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <h2 bgcolor="#9ACD32">แบบสำรวจอาการหลังได้รับวัคซีน</h2>
            <label for="exampleInputName">ชื่อ</label>
            <input type="name" className="form-control" name="mane" value={this.state.name} onChange={this.handleChange} />
            {errors.name.length < 0 && <small className="form-text text-muted">{errors.name}</small>}
          </div>
          {errors.n1.length < 0 && <small className="form-text text-muted"></small>}
          <p>คำนำหน้านาม</p>
          <div class="form-group">
            <select class="form-control" name="n1" onChange={this.handleChange}>
              <option>เลือก</option>
              <option value="นาย">นาย</option>
              <option value="นางสาว">นางสาว</option>
            </select>
          </div>
          <hr />
          <p>อายุ</p>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="old" id="Check1" />
            <label class="form-check-label" for="Check1">
              18 - 23 ปี
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="old" id="Check2" />
            <label class="form-check-label" for="Check2">
              24 - 30 ปี
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="old" id="Check3" />
            <label class="form-check-label" for="Check3">
              30 - 40 ปี
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="old" id="Check4" />
            <label class="form-check-label" for="Check4">
              40 ปีขึ้นไป
            </label>
          </div>
          <hr />
          <p>คุณได้รับการฉีดวัคซีนอะไร (เข็มที่ 1)</p>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="vaccine" id="Radios1" value="Pfizer" onChange={this.handleChange} />
            <label class="form-check-label" for="Radios1">
             Pfizer
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="vaccinc" id="Radios2" value="Moderna" onChange={this.handleChange} />
            <label class="form-check-label" for="Radios2">
            Moderna
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="vaccinc" id="Radios3" value="AstraZeneca" onChange={this.handleChange} />
            <label class="form-check-label" for="Radios3">
            AstraZeneca
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="vaccinc" id="Radios4" value="Johnson" onChange={this.handleChange} />
            <label class="form-check-label" for="Radios4">
            Johnson
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="vaccinc" id="Radios5" value="Sinovac" onChange={this.handleChange} />
            <label class="form-check-label" for="Radios5">
            Sinovac
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="vaccinc" id="Radios6" value="Sinopharm" onChange={this.handleChange} />
            <label class="form-check-label" for="Radios6">
            Sinopharm
            </label>
          </div>
          <hr />
          <p>หลังได้รับวัตซีนมีคุณอาการเหล่านี้หรือไม่?</p>
          <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="vaccine2" id="symptoms1" />
            <label class="form-check-label" for="symptoms1">
              ไม่มี
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="vaccine2" id="symptoms1" />
            <label class="form-check-label" for="symptoms1">
              มี
            </label>
          </div>
            <select class="form-control" name="Symptoms" onChange={this.handleChange}>
              <option>เลือก</option>
              <option value="ปวด บวม แดง ร้อน คัน บริเวณที่ฉีด">ปวด บวม แดง ร้อน คัน บริเวณที่ฉีด</option>
              <option value="ไข้ต่ำ">ไข้ต่ำ</option>
              <option value="คลื่นไส้">คลื่นไส้</option>
              <option value="อาเจียน">อาเจียน</option>
              <option value="อ่อนเพลีย">อ่อนเพลีย</option>
            </select>
            <label for="exampleInputsymptoms">อื่นๆ</label>
            <input type="symptoms" className="form-control" name="symptoms"  placeholder="โปรดระบุ" value={this.state.symptoms} onChange={this.handleChange} />
            {errors.symptoms.length < 3 && <small className="form-text text-muted">{errors.symptoms}</small>}
          </div>
          <hr />
          <p>คุณได้รับการฉีดวัคซีนอะไร (เข็มที่ 2)</p>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="vaccine2" id="Radios1" value="Pfizer" onChange={this.handleChange} />
            <label class="form-check-label" for="Radios1">
             Pfizer
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="vaccinc" id="Radios2" value="Moderna" onChange={this.handleChange} />
            <label class="form-check-label" for="Radios2">
            Moderna
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="vaccinc" id="Radios3" value="AstraZeneca" onChange={this.handleChange} />
            <label class="form-check-label" for="Radios3">
            AstraZeneca
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="vaccinc" id="Radios4" value="Johnson" onChange={this.handleChange} />
            <label class="form-check-label" for="Radios4">
            Johnson
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="vaccinc" id="Radios5" value="Sinovac" onChange={this.handleChange} />
            <label class="form-check-label" for="Radios5">
            Sinovac
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="vaccinc" id="Radios6" value="Sinopharm" onChange={this.handleChange} />
            <label class="form-check-label" for="Radios6">
            Sinopharm
            </label>
          </div>
          <hr />
          <p>หลังได้รับวัตซีนมีคุณอาการเหล่านี้หรือไม่?</p>
          <div class="form-group">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="fruit[]" id="symptoms1" />
            <label class="form-check-label" for="symptoms2">
              ไม่มี
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="fruit[]" id="symptoms1" />
            <label class="form-check-label" for="symptoms2">
              มี
            </label>
          </div>
            <select class="form-control" name="Symptoms" onChange={this.handleChange}>
            <option>เลือก</option>
              <option value="ปวด บวม แดง ร้อน คัน บริเวณที่ฉีด">ปวด บวม แดง ร้อน คัน บริเวณที่ฉีด</option>
              <option value="ไข้ต่ำ">ไข้ต่ำ</option>
              <option value="คลื่นไส้">คลื่นไส้</option>
              <option value="อาเจียน">อาเจียน</option>
              <option value="อ่อนเพลีย">อ่อนเพลีย</option>
            </select>
            <label for="exampleInputsymptoms2">อื่นๆ</label>
            <input type="symptoms2" className="form-control" name="symptoms2" placeholder="โปรดระบุ" value={this.state.symptoms2} onChange={this.handleChange} />
            {errors.symptoms2.length < 3 && <small className="form-text text-muted">{errors.symptoms2}</small>}
          </div>
          <hr />
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
export default App;