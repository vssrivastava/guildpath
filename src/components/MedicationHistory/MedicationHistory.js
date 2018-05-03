import React, { Component } from 'react';
import $ from 'jquery'; // sigh! Will think of something 

// import { searchMeds, postMeds, putMeds } from '../../services/fetchService';
import { searchMeds } from '../../services/fetchService';

import './MedicationHistory.css';

class MedicationHistory extends Component {
  initialState = {
    searchResult: [],
    addManually: false,
    prepopulate: {},
    drugsHidden: false,
    searchError: null
  }
  constructor(props) {
    super(props);
    this.state = {
      ...this.initialState,
      medications: this.props.history
    };
    this.pbsCodeRef = React.createRef();
    this.medNameRef = React.createRef();
    this.medStrengthRef = React.createRef();
    this.medDosageRef = React.createRef();
    this.medCodeRef = React.createRef();

    this.searchMeds = this.searchMeds.bind(this);
    this.addManually = this.addManually.bind(this);
    this.hideDrugs = this.hideDrugs.bind(this);
    this.showDrugs = this.showDrugs.bind(this);
    this.cancelForm = this.cancelForm.bind(this);
  }

  addManually(medcode, medcat, medname, medstr) {
    this.setState({
      addManually: true,
      searchResult: [],
      searchError: null,
      prepopulate: {
        medcode,
        medcat,
        medname,
        medstr
      }
    });
  }

  searchMeds(searchTerm) {
    searchMeds(searchTerm).then(res => {
      if (!res.length) {
        this.setState({
          searchError: 'No results found'
        });
      } else if (res.length === 1) {
        const aRes = res[0];
        this.pbsCodeRef.current.value = '';
        this.addManually(aRes.pbsCode, aRes.categories, aRes.genericName, aRes.strength);
      } else {
        this.pbsCodeRef.current.value = '';
        this.setState({
          searchResult: res,
          searchError: null
        });
      }
    });
  }

  onAdd(name, strength, dosage, pbsCode, categories) {
    const prevData = this.state.medications;
    const allData = { 
      medications: prevData.concat([{
        Name: name,
        Strength: strength,
        Directions: dosage,
        pbsCode,
        categories
      }]),
      addManually: false,
      prepopulate: {},
      searchResult: []
    };
    this.setState(allData);
    this.props.onAdd(allData);
  }
  // addMed(name, strength, dosage, pbsCode, categories) {
  //   postMeds(this.state.participantId, {
  //     surveyId: this.props.survey,
  //     Medications: 
  //   });
  //   postMeds(this.props.participant, {
  //     noteBody: newNote,
  //     noteTitle:'',
  //     target: 'general',
  //     surveyId: this.props.survey
  //   }).then(res => {
  //     const prevNotes = this.state.notes;
  //     const allNotes = { notes: prevNotes.concat([res]) }
  //     this.setState(allNotes);
  //     this.props.onAdd(allNotes);
  //   });
  // }

  editMed(id) {
    // $('#note-'+id).addClass('editing');
  }

  // cancelEdit(id) {
  //   $('#note-'+id).removeClass('editing');
  // }

  // saveNote(id) {
  //   putNotes(this.props.participant, id, {
  //     noteBody: $('#note-editable-'+id).val(),
  //     noteTitle:'',
  //     target: 'general',
  //     surveyId: this.props.survey
  //   }).then(res => {
  //     const updatedNotes = this.state.notes.map((note, i)=> note.id === id ? res : note);
  //     this.setState({ notes: updatedNotes});
  //     this.props.onAdd({ notes: updatedNotes});
  //     this.cancelEdit(id);
  //   });
  // }
  cancelForm() {
    this.setState(this.initialState);
  }
  hideDrugs() {
    this.setState({drugsHidden: true});
  }
  showDrugs() {
    this.setState({drugsHidden: false});
  }
  onInput(i){
    const recomVal = Number($('#recom'+i).val());
    const actualVal = Number($('#actual'+i).val());
    if (recomVal && actualVal) {
      $('#adhscore'+i).text(parseFloat(actualVal*100/recomVal).toFixed(2) + '%');
    }
  }

  render() {
    const { drugsHidden, medications, searchResult, searchError, prepopulate, addManually } = this.state;
    const submitSearch = e => {
      e.preventDefault();
      const val = this.pbsCodeRef.current.value;
      if (!val) return;
      this.searchMeds(val.toUpperCase());
    };
    const classNames = [
      'medication-history',
      searchResult.length > 0 || addManually ? 'subpanel-open' : ''
    ].join(' ');
    const cancelButton = (
      <button className='icon-right' id='form-cancel' onClick={this.cancelForm}>
        Cancel
        <i className="fas fa-ban"></i>
      </button>
    );
    return (
      <div className={classNames}>
        <h2>Medication History</h2>
        {drugsHidden
          ? <button className='show-hide show-btn icon-left' onClick={this.showDrugs}>
              <i className="fas fa-eye"></i>
              Show All Medicines
            </button>
          : <button className='show-hide hide-btn icon-left' onClick={this.hideDrugs}>
              <i className="fas fa-eye-slash"></i>
              Show Only Asthma Preventer Medicines
            </button>
        }
        <div className='all-medications-wrapper'>
          <table className='all-medications'>
            {drugsHidden
              ? <thead><tr><th>Drug Name</th><th>Strength</th><th>Recommended Dosage</th><th>Actual Dosage</th><th>ADH Score</th></tr></thead>
              : <thead><tr><th>Drug Name</th><th>Strength</th><th>Dosage</th><th></th></tr></thead>
            }
            <tbody>
            {medications.length > 0
              ? medications.map((med, i) => {
                const isAsthma = med.categories && med.categories.some(v=>(v.toLowerCase()==='asthma'));
                if (drugsHidden){
                  if (isAsthma) {
                    return (<tr key={i}>
                      <td>{med.Name}</td>
                      <td>{med.Strength}</td>
                      <td><input id={`recom${i}`} type='number' onInput={()=>{this.onInput(i)}} /></td>
                      <td><input id={`actual${i}`} type='number' onInput={()=>{this.onInput(i)}}/></td>
                      <td><span id={`adhscore${i}`} /></td>
                    </tr>);                  
                  }
                  return null;
                }
                return (<tr className='participant-med' id={`med-${med.id}`} key={i}>
                  <td>{med.Name}</td>
                  <td>{med.Strength}</td>
                  <td>{med.Directions}</td>
                  <td><button className='btn-edit-med' id={`editmed-${med.id}`} onClick={() => {this.editMed(med.id)}}><i className="far fa-edit"></i></button></td>
                </tr>);
              })
              : <tr><td colspan='3'>No medications found. Please add medications in the section below.</td></tr>
            }
            </tbody>
          </table>
        </div>
        <div className='add-medication-section'>
          <h3>Add a medication</h3>
          <div>Search for a medication by PBS code or medication name. Or, add the medication manually.</div>
          <form id="pbs-search-form" onSubmit={submitSearch}>
            <input type='text' className={searchError ? 'search-pbsCode has-error' : 'search-pbsCode'} placeholder='PBS Code or Name' ref={this.pbsCodeRef} />
            <button className="icon-right" id='search-code' onClick={submitSearch}>
              Search
              <i className="fas fa-search"></i>
            </button>
            <button className="icon-right" id='add-code-manually' onClick={this.addManually}>
              Add Manually
              <i className="fas fa-plus"></i>
            </button>
          </form>
          {searchError &&
            <div className='error-message'>{searchError}</div>
          }
        </div>
        {searchResult.length > 1 && !addManually &&
          <div className='pbs-search-result'>
            <h3>Choose a medication</h3>
            <div>Choose one of the medications from the results below to add.</div>
            <div className='search-results-wrapper'>
            {searchResult.map((res, i) => (
              <button key={i} className='search-result' onClick={()=>{
                this.addManually(res.pbsCode, res.categories, res.genericName, res.strength);
              }}>
                <div className='result-pbs-code'>{res.pbsCode}</div>
                <div className='result-med-name'>{res.genericName}</div>
                <div className='result-med-strength'>{res.strength}</div>
              </button>
            ))}
            </div>
            {cancelButton}
          </div>
        }
        {(searchResult.length === 1 || addManually) &&
          <div className='add-medication-manually'>
            <h3>Add a medication</h3>
            <div>All fields are required.</div>
            <input type='text' id='add-med-name' placeholder='Drug Name'
              defaultValue={prepopulate.medname} ref={this.medNameRef}
            />
            <input type='text' id='add-med-strength' placeholder='Drug Strength'
              defaultValue={prepopulate.medstr} ref={this.medStrengthRef} />
            <textarea className='add-med-dosage' placeholder='Dosage Information' ref={this.medDosageRef} />
            <button className='icon-right' onClick={() => {
              const medname = this.medNameRef.current.value;
              const medstr = this.medStrengthRef.current.value;
              const meddos = this.medDosageRef.current.value;
              if (!medname || !medstr || !meddos) return;
              this.medNameRef.current.value = '';
              this.medStrengthRef.current.value = '';
              this.medDosageRef.current.value = '';
              this.onAdd(medname, medstr, meddos, prepopulate.medcode, prepopulate.medcat);
            }}>
              Add
              <i className="fas fa-plus"></i>
            </button>
            {cancelButton}
          </div>
        }
      </div>
    );
  }
}

export default MedicationHistory;
