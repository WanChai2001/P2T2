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
      company: null,
      email: null,
      pn: null,
      comment: null,
      submit: null,
      errors: {
        name: 'กรอกชื่อของคุณให้ถูกต้อง',
        company: 'กรุณากรอกชื่อบริษัทของคุณใหม่',
        email: 'กรุณากรอกEmailของคุณให้ถูกต้อง',
        pn: 'กรอกเบอร์มือถือใหม่อีกครั้ง',
        country: 'กรุณาเลือกประเทษของคุณ',
        sex: 'กรุณาเลือกเพศ',
        lg: 'กรุณาเลือกภาษา',
        comment: 'ความเห็นเพิ่มเติม',
        submit: 'ยอมรัยข้อตกลง',
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
        errors.name = value.length < 5 ?  '' : 'กรุณากรอกชื่อของคุณใหม่';
        break;
      case 'company':
        errors.company = value.length < 0 ?  '' : 'กรุณากรอกชื่อบริษัทของคุณใหม่';
        break;
      case 'email':
          errors.email = validEmailRegex.test(value) ? '' : 'กรอกอีเมลให้ถูกต้อง';
        break;
      case 'pn':
        errors.pn = value.length < 9 ? '' : 'กรุณากรอกเบอร์มือถือใหม่';
        break;
      case 'comment':
        errors.comment = value.length > 0 ? '' : 'โปรดเลือกประเทศของคุณ';
        break;
      case 'sex':
        errors.sex = value.length > 0 ? '' : 'โปรดระบุเพศของคุณ';
        break;
      case 'lg':
        errors.lg = value.length > 0 ? '' : 'โปรดระบุภาษาของคุณ';
        break;
        case 'comment':
        errors.comment = value.length > 0 ? '' : 'โปรดระบุความคิดเห็น';
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
            <h2 bgcolor="#9ACD32">Registration Form</h2>
            <label for="exampleInputName">Full Name</label>
            <input type="name" className="form-control" name="mane" placeholder="Enter Name" value={this.state.name} onChange={this.handleChange} />
            {errors.name.length < 5 && <small className="form-text text-muted">{errors.name}</small>}
          </div>
          <div className="form-group">
            <label for="exampleInputcompany">Company</label>
            <input type="company" className="form-control" name="company" placeholder="Your company name" value={this.state.company} onChange={this.handleChange} />
            {errors.company.length < 0 && <small className="form-text text-muted">{errors.company}</small>}
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" className="form-control" name="email" placeholder="xxxxxx@email.com" value={this.state.email} onChange={this.handleChange} />
            {errors.email.length < 0 && <small className="form-text text-muted">{errors.email}</small>}
          </div>
          <div className="form-group">
            <label for="exampleInputPhonenumber">Phone number</label>
            <input type="pn" className="form-control" name="pn" placeholder="Enter Phone number" value={this.state.pn} onChange={this.handleChange} />
            {errors.pn.length < 9 && <small className="form-text text-muted">{errors.pn}</small>}
          </div>
          <p>Country</p>
          <div class="form-group">
            <select class="form-control" name="country" onChange={this.handleChange}>
              <option>Cilck to choose</option>
              <option value="Thailand">Thailand</option>
              <option value="Germany">Germany</option>
              <option value="United States of America">United States of America</option>
              <option value="France">France</option>
              <option value="Russia">Russia</option>
              <option value="Japan">Japan</option>
              <option value="China">China</option>
              <option value="Italy">Italy</option>
              <option value="Hungary">Hungary</option>
              <option value="Korea">Korea</option>
            </select>
          </div>
          <p>Sex</p>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="fruit[]" id="sex" />
            <label class="form-check-label" for="sex">
              Male
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" name="fruit[]" id="sex" />
            <label class="form-check-label" for="sex">
              Female
            </label>
          </div>
            <p>Language</p>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="lg" id="lg" value="English" onChange={this.handleChange} />
            <label class="form-check-label" for="English">
             English
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="lg" id="lg" value="French" onChange={this.handleChange} />
            <label class="form-check-label" for="French">
              French
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="lg" id="lg" value="Other" onChange={this.handleChange} />
            <label class="form-check-label" for="Other">
              Other
            </label>
            <div className="form-group">
            <label for="exampleInputcomment">Comment</label>
            <input type="comment" className="form-control" name="ecomment" placeholder="Say hello" value={this.state.comment} onChange={this.handleChange} />
            {errors.comment.length < 0 && <small className="form-text text-muted">{errors.comment}</small>}
          </div>
         </div>
         <input class="form-check-input" type="checkbox" name="fruit[]" id="submit" />
            <label class="form-check-label" for="submit">
              I agree with
            </label>
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }
}
export default App;