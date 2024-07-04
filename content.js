function addEditButton() {
    // Check if the button already exists
    if (document.getElementById('auto-edit-button')) return;
  
    const button = document.createElement('button');
    button.id = 'auto-edit-button';
    button.textContent = 'Auto Edit';
    button.style.position = 'fixed';
    button.style.top = '10px';
    button.style.right = '10px';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#fff';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.zIndex = '1000';
  
    button.addEventListener('click', () => {
      alert('Auto Edit Button Clicked');
      // Future: Add the AI-based editing functionality here
    });
  
    document.body.appendChild(button);
  }
  
  // Run the function to add the button when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', addEditButton);
  