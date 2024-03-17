const form = document.getElementById('journalForm');
const journalEntry = document.getElementById('journalEntry');
const entriesDiv = document.getElementById('entries');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const entryText = journalEntry.value.trim();
    if (entryText === '') return;

    const entryDate = new Date().toLocaleString();
    const entryHTML = `<div class="entry">
                            <p><strong>${entryDate}</strong></p>
                            <p>${entryText}</p>
                        </div>`;
    
    entriesDiv.insertAdjacentHTML('afterbegin', entryHTML);
    
    journalEntry.value = '';
});