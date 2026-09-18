
/* ==========================================================================
   WORKFORCEX AI - CORE ENGINE & DYNAMIC ALLOCATION ALGORITHM
   Vanilla JS Production Architecture
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. GLOBAL STATE & DEMO DATASET
    const state = {
        employees: [
            {
                id: 'emp-101',
                name: 'Alex Rivera',
                role: 'Senior DevOps Architect',
                status: 'Available',
                maxHours: 40,
                assignedHours: 24,
                skills: [
                    { name: 'Kubernetes', level: 95 },
                    { name: 'Cloud Architecture', level: 92 },
                    { name: 'Python', level: 85 },
                    { name: 'Cyber Security', level: 78 }
                ],
                assignedTasks: ['task-202'],
                avatarInitials: 'AR'
            },
            {
                id: 'emp-102',
                name: 'Sarah Chen',
                role: 'Principal Cloud & AI Engineer',
                status: 'Busy',
                maxHours: 40,
                assignedHours: 36,
                skills: [
                    { name: 'Python', level: 98 },
                    { name: 'AI/ML', level: 96 },
                    { name: 'Cloud Architecture', level: 90 },
                    { name: 'Kubernetes', level: 82 }
                ],
                assignedTasks: ['task-201', 'task-205'],
                avatarInitials: 'SC'
            },
            {
                id: 'emp-103',
                name: 'Marcus Vance',
                role: 'Lead System Architect',
                status: 'Busy',
                maxHours: 40,
                assignedHours: 38,
                skills: [
                    { name: 'Cloud Architecture', level: 99 },
                    { name: 'Kubernetes', level: 94 },
                    { name: 'Cyber Security', level: 88 },
                    { name: 'Python', level: 90 }
                ],
                assignedTasks: ['task-203'],
                avatarInitials: 'MV'
            },
            {
                id: 'emp-104',
                name: 'Elena Rostova',
                role: 'Cyber Security Specialist',
                status: 'Available',
                maxHours: 40,
                assignedHours: 16,
                skills: [
                    { name: 'Cyber Security', level: 99 },
                    { name: 'Kubernetes', level: 80 },
                    { name: 'Python', level: 85 }
                ],
                assignedTasks: ['task-204'],
                avatarInitials: 'ER'
            },
            {
                id: 'emp-105',
                name: 'Priya Sharma',
                role: 'Full Stack & AI Engineer',
                status: 'Available',
                maxHours: 40,
                assignedHours: 20,
                skills: [
                    { name: 'Python', level: 90 },
                    { name: 'Frontend JS', level: 94 },
                    { name: 'UI/UX Design', level: 88 },
                    { name: 'AI/ML', level: 82 }
                ],
                assignedTasks: ['task-206'],
                avatarInitials: 'PS'
            },
            {
                id: 'emp-106',
                name: 'David Kim',
                role: 'UI/UX Lead & Frontend Specialist',
                status: 'Available',
                maxHours: 40,
                assignedHours: 18,
                skills: [
                    { name: 'UI/UX Design', level: 96 },
                    { name: 'Frontend JS', level: 95 },
                    { name: 'Python', level: 70 }
                ],
                assignedTasks: ['task-207'],
                avatarInitials: 'DK'
            },
            {
                id: 'emp-107',
                name: 'Aisha Bello',
                role: 'MLOps & Pipeline Engineer',
                status: 'Available',
                maxHours: 40,
                assignedHours: 28,
                skills: [
                    { name: 'AI/ML', level: 92 },
                    { name: 'Python', level: 94 },
                    { name: 'Kubernetes', level: 88 },
                    { name: 'Cloud Architecture', level: 80 }
                ],
                assignedTasks: ['task-208'],
                avatarInitials: 'AB'
            },
            {
                id: 'emp-108',
                name: 'Liam O\'Connor',
                role: 'Infrastructure Specialist',
                status: 'On Leave',
                maxHours: 40,
                assignedHours: 0,
                skills: [
                    { name: 'Cloud Architecture', level: 85 },
                    { name: 'Kubernetes', level: 88 },
                    { name: 'Cyber Security', level: 75 }
                ],
                assignedTasks: [],
                avatarInitials: 'LO'
            }
        ],

        tasks: [
            {
                id: 'task-201',
                title: 'Deploy LLM Inference Microservice on K8s',
                priority: 'P1',
                slaHours: 12,
                requiredSkills: ['AI/ML', 'Python', 'Kubernetes'],
                status: 'in-progress',
                assignedEmployeeId: 'emp-102'
            },
            {
                id: 'task-202',
                title: 'Automate Multi-Region Terraform Failover',
                priority: 'P2',
                slaHours: 24,
                requiredSkills: ['Cloud Architecture', 'Kubernetes'],
                status: 'in-progress',
                assignedEmployeeId: 'emp-101'
            },
            {
                id: 'task-203',
                title: 'Architect Hybrid Cloud Service Mesh (P0 Emergency)',
                priority: 'P0',
                slaHours: 4,
                requiredSkills: ['Cloud Architecture', 'Kubernetes', 'Cyber Security'],
                status: 'in-progress',
                assignedEmployeeId: 'emp-103'
            },
            {
                id: 'task-204',
                title: 'Zero-Trust IAM Policy Security Audit',
                priority: 'P1',
                slaHours: 16,
                requiredSkills: ['Cyber Security', 'Cloud Architecture'],
                status: 'in-progress',
                assignedEmployeeId: 'emp-104'
            },
            {
                id: 'task-205',
                title: 'Optimize Vector Embeddings Latency (<50ms)',
                priority: 'P2',
                slaHours: 36,
                requiredSkills: ['AI/ML', 'Python'],
                status: 'in-progress',
                assignedEmployeeId: 'emp-102'
            },
            {
                id: 'task-206',
                title: 'Build AI Analytics Telemetry Dashboard',
                priority: 'P3',
                slaHours: 48,
                requiredSkills: ['Frontend JS', 'UI/UX Design'],
                status: 'in-progress',
                assignedEmployeeId: 'emp-105'
            },
            {
                id: 'task-207',
                title: 'Design Dark Operations UI System',
                priority: 'P2',
                slaHours: 24,
                requiredSkills: ['UI/UX Design', 'Frontend JS'],
                status: 'in-progress',
                assignedEmployeeId: 'emp-106'
            },
            {
                id: 'task-208',
                title: 'Configure Automated CI/CD Model Evaluation',
                priority: 'P2',
                slaHours: 30,
                requiredSkills: ['AI/ML', 'Kubernetes', 'Python'],
                status: 'in-progress',
                assignedEmployeeId: 'emp-107'
            },
            {
                id: 'task-301',
                title: 'Incoming: Kafka Data Stream Encryption',
                priority: 'P1',
                slaHours: 8,
                requiredSkills: ['Cyber Security', 'Python'],
                status: 'unassigned',
                assignedEmployeeId: null
            },
            {
                id: 'task-302',
                title: 'Incoming: High-Throughput API Gateway Rate Limiting',
                priority: 'P2',
                slaHours: 18,
                requiredSkills: ['Cloud Architecture', 'Frontend JS'],
                status: 'unassigned',
                assignedEmployeeId: null
            }
        ],

        activityLogs: [
            {
                id: 'act-1',
                type: 'reallocation',
                time: '18:40:12',
                title: 'Auto-Reallocated P0 Service Mesh Task',
                description: 'AI shifted task to Marcus Vance based on 98% skill match vector.',
                category: 'reallocation'
            },
            {
                id: 'act-2',
                type: 'incident',
                time: '18:32:05',
                title: 'P0 Emergency Cyber Security Event Injected',
                description: 'Preempted non-urgent task and allocated Elena Rostova within 0.28s.',
                category: 'incident'
            },
            {
                id: 'act-3',
                type: 'absence',
                time: '18:15:40',
                title: 'Staff Absence Notification Processed',
                description: 'Liam O\'Connor marked On Leave. All deliverables safely routed.',
                category: 'absence'
            }
        ],

        stats: {
            totalReallocations: 12,
            slaBreachesSaved: 4,
            avgLatency: 0.38,
            stressIndex: 12
        },

        activeFilter: 'all',
        activityFilter: 'all',
        searchQuery: ''
    };

    const baselineSnapshot = JSON.parse(JSON.stringify({ employees: state.employees, tasks: state.tasks }));

    // 2. AI MATCHING VECTOR ALGORITHM
    function calculateAIMatch(employee, task) {
        if (employee.status === 'On Leave') {
            return { totalScore: 0, skillScore: 0, capacityScore: 0, priorityScore: 0, rationale: 'Employee is On Leave.' };
        }

        let matchedSkillsCount = 0;
        let totalProficiencySum = 0;
        
        task.requiredSkills.forEach(reqSkill => {
            const empSkillObj = employee.skills.find(s => s.name.toLowerCase() === reqSkill.toLowerCase());
            if (empSkillObj) {
                matchedSkillsCount++;
                totalProficiencySum += empSkillObj.level;
            }
        });

        if (task.requiredSkills.length === 0) matchedSkillsCount = 1;
        const skillCoverageRatio = matchedSkillsCount / task.requiredSkills.length;
        const avgProficiencyRatio = matchedSkillsCount > 0 ? (totalProficiencySum / matchedSkillsCount) / 100 : 0;
        
        const skillScore = Math.round((skillCoverageRatio * 0.7 + avgProficiencyRatio * 0.3) * 100);

        const remainingCapacity = Math.max(0, employee.maxHours - employee.assignedHours);
        const capacityRatio = remainingCapacity / employee.maxHours;
        const capacityScore = Math.round(capacityRatio * 100);

        let priorityWeight = 0.8;
        if (task.priority === 'P0') priorityWeight = 1.0;
        else if (task.priority === 'P1') priorityWeight = 0.9;
        else if (task.priority === 'P2') priorityWeight = 0.8;
        else priorityWeight = 0.7;

        const priorityScore = Math.round(priorityWeight * 100);

        let totalScore = Math.round((skillScore * 0.40) + (capacityScore * 0.30) + (priorityScore * 0.20) + (85 * 0.10));

        if (skillCoverageRatio === 0) {
            totalScore = Math.min(totalScore, 20);
        }

        return {
            totalScore,
            skillScore,
            capacityScore,
            priorityScore,
            remainingCapacity,
            skillCoverageRatio: Math.round(skillCoverageRatio * 100),
            rationale: `Skill vector match: ${skillScore}%, Capacity headroom: ${remainingCapacity}h available (${capacityScore}%).`
        };
    }

    function findBestMatchesForTask(task) {
        const rankings = state.employees.map(emp => {
            const match = calculateAIMatch(emp, task);
            return { employee: emp, match };
        });

        rankings.sort((a, b) => b.match.totalScore - a.match.totalScore);
        return rankings;
    }

    // 3. SIMULATION ENGINES
    function triggerAbsenceSimulation() {
        const targetEmp = state.employees.find(e => e.name === 'Marcus Vance');
        if (!targetEmp) return;

        logToTerminal(`[EMERGENCY ABSENCE] Alert received: ${targetEmp.name} (${targetEmp.role}) went offline.`, 'danger');
        addActivityLog('absence', `Absence Trigger: ${targetEmp.name}`, 'Marked sick leave. Reallocating active deliverables.');

        targetEmp.status = 'On Leave';
        const affectedTaskIds = [...targetEmp.assignedTasks];
        targetEmp.assignedTasks = [];
        targetEmp.assignedHours = 0;

        switchTab('tab-reallocation-matrix');

        const sourceBox = document.getElementById('realloc-source-details');
        document.getElementById('realloc-event-title').innerText = `Absence Event: ${targetEmp.name}`;
        
        sourceBox.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
                <div class="emp-avatar-lg" style="background: var(--grad-danger);">${targetEmp.avatarInitials}</div>
                <div>
                    <h4 style="font-size: 0.95rem; color: #fff;">${targetEmp.name}</h4>
                    <p style="color: var(--color-danger); font-weight: 700; font-size: 0.8rem;">STATUS: SICK LEAVE</p>
                </div>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-secondary);">Affected Tasks to Auto-Reassign: <strong>${affectedTaskIds.length}</strong></p>
        `;

        document.getElementById('hub-status-text').innerText = 'Computing AI Vector Re-allocation...';

        affectedTaskIds.forEach(taskId => {
            const taskObj = state.tasks.find(t => t.id === taskId);
            if (!taskObj) return;

            taskObj.status = 'reallocating';
            const matches = findBestMatchesForTask(taskObj);
            const bestMatch = matches.find(m => m.employee.id !== targetEmp.id && m.employee.status !== 'On Leave');

            if (bestMatch) {
                taskObj.assignedEmployeeId = bestMatch.employee.id;
                taskObj.status = 'in-progress';
                bestMatch.employee.assignedTasks.push(taskObj.id);
                bestMatch.employee.assignedHours += 14;
                
                if (bestMatch.employee.assignedHours >= bestMatch.employee.maxHours * 0.8) {
                    bestMatch.employee.status = 'Busy';
                }

                logToTerminal(`[AI REALLOCATED] Task '${taskObj.title}' reassigned to ${bestMatch.employee.name} (${bestMatch.match.totalScore}% match score).`, 'success');
                addXAITimelineItem(
                    `Reallocated '${taskObj.title}' -> ${bestMatch.employee.name}`,
                    `Vector Score: ${bestMatch.match.totalScore}%. Skill match: ${bestMatch.match.skillScore}%. SLA Saved!`,
                    'success'
                );

                document.getElementById('vec-skill').innerText = `${bestMatch.match.skillScore}%`;
                document.getElementById('vec-capacity').innerText = `${bestMatch.match.capacityScore}%`;
                document.getElementById('vec-sla').innerText = `SAVED (SLA ${taskObj.slaHours}h)`;

                document.getElementById('realloc-target-title').innerText = `Assigned: ${bestMatch.employee.name}`;
                document.getElementById('realloc-target-details').innerHTML = `
                    <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                        <div class="emp-avatar-lg" style="background: var(--grad-ai);">${bestMatch.employee.avatarInitials}</div>
                        <div>
                            <h4 style="font-size: 0.95rem; color: #fff;">${bestMatch.employee.name}</h4>
                            <p style="color: var(--accent-secondary); font-weight: 700; font-size: 0.8rem;">${bestMatch.employee.role}</p>
                        </div>
                    </div>
                    <div style="background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); padding: 8px; border-radius: 6px;">
                        <span style="font-size: 0.7rem; color: var(--text-secondary);">AI Match Score</span>
                        <strong style="font-size: 1.1rem; color: var(--color-success); display: block;">${bestMatch.match.totalScore}%</strong>
                    </div>
                `;
            }
        });

        document.getElementById('hub-status-text').innerText = 'Re-allocation Complete (0.32s)';
        state.stats.totalReallocations++;
        state.stats.slaBreachesSaved++;

        updateAllViews();
    }

    function triggerP0IncidentSimulation() {
        const newP0Task = {
            id: `task-p0-${Date.now()}`,
            title: '🚨 CRITICAL: Zero-Day Auth Security Breach Patch',
            priority: 'P0',
            slaHours: 2,
            requiredSkills: ['Cyber Security', 'Cloud Architecture'],
            status: 'reallocating',
            assignedEmployeeId: null
        };

        state.tasks.unshift(newP0Task);
        logToTerminal(`[P0 INCIDENT INJECTED] '${newP0Task.title}'. SLA Target: 2 Hours!`, 'danger');
        addActivityLog('incident', 'P0 Incident Injected', newP0Task.title);

        switchTab('tab-reallocation-matrix');

        document.getElementById('realloc-event-title').innerText = `P0 Emergency Incident`;
        document.getElementById('realloc-source-details').innerHTML = `
            <div style="background: rgba(239, 68, 68, 0.15); border: 1px solid var(--color-danger); padding: 10px; border-radius: 6px;">
                <h4 style="color: var(--color-danger); font-size: 0.9rem;">${newP0Task.title}</h4>
                <p style="font-size: 0.75rem; margin-top: 4px; color: #fff;">SLA Deadline: <strong>2 Hours</strong> | Skills: Cyber Security, Cloud</p>
            </div>
        `;

        document.getElementById('hub-status-text').innerText = 'Evaluating Priority Preemption Vector...';

        const matches = findBestMatchesForTask(newP0Task);
        const bestSecurityExpert = matches[0];

        if (bestSecurityExpert) {
            const emp = bestSecurityExpert.employee;

            if (emp.assignedTasks.length > 0) {
                const lowPriorityTaskId = emp.assignedTasks[0];
                const lowTask = state.tasks.find(t => t.id === lowPriorityTaskId);

                if (lowTask && lowTask.priority !== 'P0') {
                    logToTerminal(`[PREEMPTION] Preempting task '${lowTask.title}' on ${emp.name} to handle P0 Incident!`, 'warning');
                    emp.assignedTasks.shift();
                    lowTask.status = 'unassigned';
                    lowTask.assignedEmployeeId = null;

                    const backupMatches = findBestMatchesForTask(lowTask);
                    const backupEmp = backupMatches.find(m => m.employee.id !== emp.id && m.employee.status !== 'On Leave');
                    if (backupEmp) {
                        lowTask.assignedEmployeeId = backupEmp.employee.id;
                        lowTask.status = 'in-progress';
                        backupEmp.employee.assignedTasks.push(lowTask.id);
                        logToTerminal(`[DYNAMIC CASCADE] Bounced task '${lowTask.title}' -> Reassigned to ${backupEmp.employee.name}.`, 'ai');
                    }
                }
            }

            newP0Task.assignedEmployeeId = emp.id;
            newP0Task.status = 'in-progress';
            emp.assignedTasks.unshift(newP0Task.id);

            logToTerminal(`[P0 ASSIGNED] Assigned to ${emp.name} (${bestSecurityExpert.match.totalScore}% Match Score).`, 'success');

            addXAITimelineItem(
                `P0 Incident Emergency Allocation -> ${emp.name}`,
                `Preempted non-urgent deliverables. Allocated top Cyber Security expert (${bestSecurityExpert.match.skillScore}% skill match) in 0.28s.`,
                'warning'
            );

            document.getElementById('vec-skill').innerText = `${bestSecurityExpert.match.skillScore}%`;
            document.getElementById('vec-capacity').innerText = `${bestSecurityExpert.match.capacityScore}%`;
            document.getElementById('vec-sla').innerText = `CRITICAL (P0 SLA 2h)`;

            document.getElementById('realloc-target-title').innerText = `Incident Response Lead: ${emp.name}`;
            document.getElementById('realloc-target-details').innerHTML = `
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                    <div class="emp-avatar-lg" style="background: var(--grad-danger);">${emp.avatarInitials}</div>
                    <div>
                        <h4 style="font-size: 0.95rem; color: #fff;">${emp.name}</h4>
                        <p style="color: var(--color-danger); font-weight: 700; font-size: 0.8rem;">${emp.role}</p>
                    </div>
                </div>
                <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid rgba(239, 68, 68, 0.3); padding: 8px; border-radius: 6px;">
                    <span style="font-size: 0.7rem; color: var(--text-secondary);">Incident Response Match</span>
                    <strong style="font-size: 1.1rem; color: var(--color-danger); display: block;">${bestSecurityExpert.match.totalScore}%</strong>
                </div>
            `;
        }

        document.getElementById('hub-status-text').innerText = 'P0 Allocation Active';
        state.stats.totalReallocations++;

        updateAllViews();
    }

    function triggerWorkloadBalancingSimulation() {
        logToTerminal(`[RE-BALANCE RUN] Initiating global workforce capacity load balancing algorithm...`, 'system');
        addActivityLog('reallocation', 'Workload Rebalancing', 'Balanced high-capacity nodes across available staff.');

        let rebalanceCount = 0;
        const overloadedStaff = state.employees.filter(e => e.assignedHours > e.maxHours * 0.8 && e.status !== 'On Leave');
        const availableStaff = state.employees.filter(e => e.assignedHours < e.maxHours * 0.5 && e.status !== 'On Leave');

        if (overloadedStaff.length === 0) {
            logToTerminal(`[RE-BALANCE] All team members are currently within optimal workload thresholds.`, 'info');
            return;
        }

        overloadedStaff.forEach(busyEmp => {
            if (busyEmp.assignedTasks.length > 1 && availableStaff.length > 0) {
                const taskToMoveId = busyEmp.assignedTasks.pop();
                const taskToMove = state.tasks.find(t => t.id === taskToMoveId);
                
                if (taskToMove && taskToMove.priority !== 'P0') {
                    const recipient = availableStaff[0];
                    busyEmp.assignedHours -= 10;
                    if (busyEmp.assignedHours < busyEmp.maxHours * 0.8) busyEmp.status = 'Available';

                    recipient.assignedTasks.push(taskToMove.id);
                    recipient.assignedHours += 10;
                    taskToMove.assignedEmployeeId = recipient.id;

                    rebalanceCount++;
                    logToTerminal(`[AUTO-BALANCE] Shifted task '${taskToMove.title}' from ${busyEmp.name} (High Load) to ${recipient.name}.`, 'success');

                    addXAITimelineItem(
                        `Load Rebalanced: ${busyEmp.name} -> ${recipient.name}`,
                        `Reduced capacity strain on ${busyEmp.name}. Optimized team burnout index.`,
                        'info'
                    );
                }
            }
        });

        if (rebalanceCount > 0) {
            switchTab('tab-reallocation-matrix');
            document.getElementById('realloc-event-title').innerText = `Global Load Re-balancing`;
            document.getElementById('realloc-source-details').innerHTML = `
                <div style="padding: 8px; color: var(--accent-secondary); font-weight: 700; font-size: 0.85rem;">
                    Simulated Team Strain Mitigation: ${rebalanceCount} Tasks Re-distributed cleanly across capacity nodes.
                </div>
            `;
            document.getElementById('hub-status-text').innerText = 'Load Balanced Successfully';
        }

        updateAllViews();
    }

    // 4. CHAOS MODE RESILIENCE CHAMBER FUNCTIONS
    function triggerChaosOutage() {
        logToTerminal('[CHAOS INJECTION] Mass Team Outage triggered! 3 senior engineers taken offline.', 'danger');
        addActivityLog('incident', 'CHAOS: Mass Team Outage', '3 senior engineers taken offline simultaneously.');

        state.stats.stressIndex = 78;
        const targetNames = ['Marcus Vance', 'Sarah Chen', 'Elena Rostova'];
        
        targetNames.forEach(name => {
            const emp = state.employees.find(e => e.name === name);
            if (emp) {
                emp.status = 'On Leave';
                const tasksToMove = [...emp.assignedTasks];
                emp.assignedTasks = [];
                emp.assignedHours = 0;

                tasksToMove.forEach(tid => {
                    const t = state.tasks.find(x => x.id === tid);
                    if (t) autoAssignSingleTask(t);
                });
            }
        });

        document.getElementById('stress-index-val').innerText = 'HIGH STRESS (78%)';
        document.getElementById('stress-index-val').style.color = 'var(--color-danger)';
        updateAllViews();
    }

    function triggerChaosP0Spike() {
        logToTerminal('[CHAOS INJECTION] Spike P0 Tasks! 5 critical incidents injected.', 'warning');
        addActivityLog('incident', 'CHAOS: P0 Task Spike', '5 emergency P0 incidents injected into queue.');

        state.stats.stressIndex = 64;

        for (let i = 1; i <= 5; i++) {
            const chaosTask = {
                id: `task-chaos-${i}-${Date.now()}`,
                title: `🔥 CHAOS P0: Critical System Vulnerability #${i}`,
                priority: 'P0',
                slaHours: 3,
                requiredSkills: ['Cyber Security', 'Kubernetes'],
                status: 'unassigned',
                assignedEmployeeId: null
            };
            state.tasks.unshift(chaosTask);
            autoAssignSingleTask(chaosTask);
        }

        document.getElementById('stress-index-val').innerText = 'ELEVATED (64%)';
        document.getElementById('stress-index-val').style.color = 'var(--color-warning)';
        updateAllViews();
    }

    function triggerChaosSLACrunch() {
        logToTerminal('[CHAOS INJECTION] SLA Deadline Crunch! All task SLAs slashed by 50%.', 'warning');
        addActivityLog('incident', 'CHAOS: SLA Crunch', 'SLA hours halved across all active tasks.');

        state.tasks.forEach(t => {
            t.slaHours = Math.max(1, Math.floor(t.slaHours / 2));
        });

        updateAllViews();
    }

    function resetChaosSandbox() {
        logToTerminal('[CHAOS RESET] Restoring workforce grid and task queue to baseline state.', 'success');
        addActivityLog('reallocation', 'Chaos Sandbox Reset', 'Restored workforce baseline.');

        state.employees = JSON.parse(JSON.stringify(baselineSnapshot.employees));
        state.tasks = JSON.parse(JSON.stringify(baselineSnapshot.tasks));
        state.stats.stressIndex = 12;

        document.getElementById('stress-index-val').innerText = 'NORMAL (12%)';
        document.getElementById('stress-index-val').style.color = 'var(--color-success)';

        updateAllViews();
    }

    // 5. VIEW RENDERERS & CANVAS CHARTS
    function updateAllViews() {
        renderKPICards();
        renderCommandCenter();
        renderWorkforceGrid();
        renderKanbanPipeline();
        renderSkillMatrix();
        renderActivityFeed();
        renderAnalyticsCharts();
    }

    function renderKPICards() {
        const totalCapacity = state.employees.reduce((acc, e) => acc + (e.status === 'On Leave' ? 0 : e.maxHours), 0);
        const totalUsed = state.employees.reduce((acc, e) => acc + (e.status === 'On Leave' ? 0 : e.assignedHours), 0);
        const overallCapacityPct = totalCapacity > 0 ? Math.round((totalUsed / totalCapacity) * 100) : 0;

        document.getElementById('kpi-capacity-val').innerText = `${overallCapacityPct}%`;
        document.getElementById('kpi-capacity-fill').style.width = `${overallCapacityPct}%`;

        const activeTasks = state.tasks.filter(t => t.status === 'in-progress').length;
        const pendingTasks = state.tasks.filter(t => t.status === 'unassigned').length;

        document.getElementById('kpi-tasks-val').innerText = `${activeTasks} Active`;
        document.getElementById('kpi-unassigned-tag').innerText = `${pendingTasks} Pending Match`;
        document.getElementById('kpi-reallocs-val').innerText = `${state.stats.totalReallocations} Auto-Shifted`;
    }

    function renderCommandCenter() {
        const resourceListEl = document.getElementById('command-resource-list');
        const activeStaffCount = state.employees.filter(e => e.status !== 'On Leave').length;
        document.getElementById('workforce-count-badge').innerText = `${activeStaffCount} Staff Active`;

        resourceListEl.innerHTML = state.employees.map(emp => {
            const loadPct = Math.min(100, Math.round((emp.assignedHours / emp.maxHours) * 100));
            let statusClass = 'status-online';
            let loadClass = 'low';

            if (emp.status === 'On Leave') {
                statusClass = 'status-leave';
                loadClass = 'low';
            } else if (loadPct >= 85) {
                statusClass = 'status-busy';
                loadClass = 'max';
            } else if (loadPct >= 65) {
                loadClass = 'high';
            } else if (loadPct >= 40) {
                loadClass = 'medium';
            }

            const skillTagsHtml = emp.skills.slice(0, 3).map(s => `<span class="tag-skill">${s.name} ${s.level}%</span>`).join('');

            return `
                <div class="heatmap-item">
                    <div class="emp-top-info">
                        <div class="emp-profile">
                            <div class="emp-avatar">
                                ${emp.avatarInitials}
                                <span class="avatar-status ${statusClass}"></span>
                            </div>
                            <div class="emp-details">
                                <h4>${emp.name}</h4>
                                <p>${emp.role}</p>
                            </div>
                        </div>
                        <span class="workload-value ${loadClass}">${emp.status === 'On Leave' ? 'LEAVE' : loadPct + '%'}</span>
                    </div>
                    <div class="capacity-meter-bar">
                        <div class="fill" style="width: ${emp.status === 'On Leave' ? 0 : loadPct}%; background: ${loadPct > 85 ? 'var(--color-danger)' : (loadPct > 65 ? 'var(--color-warning)' : 'var(--accent-secondary)')};"></div>
                    </div>
                    <div class="skill-tag-row">${skillTagsHtml}</div>
                </div>
            `;
        }).join('');

        const taskListEl = document.getElementById('command-task-list');
        const priorityTasks = state.tasks.slice(0, 5);

        taskListEl.innerHTML = priorityTasks.map(task => {
            const assignee = state.employees.find(e => e.id === task.assignedEmployeeId);
            const priorityClass = task.priority.toLowerCase();

            return `
                <div class="task-card-mini border-${priorityClass}">
                    <div class="task-head-row">
                        <span class="badge-${priorityClass}">${task.priority}</span>
                        <span class="sla-timer">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            SLA: ${task.slaHours}h remaining
                        </span>
                    </div>
                    <div class="task-title-text">${task.title}</div>
                    <div class="task-foot-row">
                        <span>Skills: ${task.requiredSkills.slice(0, 2).join(', ')}</span>
                        <div class="assignee-pill">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            ${assignee ? assignee.name : '<span style="color: var(--color-warning);">Unassigned</span>'}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderWorkforceGrid() {
        const gridEl = document.getElementById('workforce-grid');
        
        const filtered = state.employees.filter(emp => {
            const matchesQuery = emp.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                                 emp.role.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
                                 emp.skills.some(s => s.name.toLowerCase().includes(state.searchQuery.toLowerCase()));
            
            if (!matchesQuery) return false;
            if (state.activeFilter === 'all') return true;
            if (state.activeFilter === 'Available') return emp.status === 'Available';
            if (state.activeFilter === 'On Leave') return emp.status === 'On Leave';
            if (state.activeFilter === 'Busy') return (emp.assignedHours / emp.maxHours) >= 0.8;
            
            return emp.skills.some(s => s.name.toLowerCase() === state.activeFilter.toLowerCase());
        });

        if (filtered.length === 0) {
            gridEl.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 24px;">No workforce members match the selected filter.</div>`;
            return;
        }

        gridEl.innerHTML = filtered.map(emp => {
            const loadPct = Math.min(100, Math.round((emp.assignedHours / emp.maxHours) * 100));
            const assignedTaskObjs = emp.assignedTasks.map(tid => state.tasks.find(t => t.id === tid)).filter(Boolean);

            const skillsListHtml = emp.skills.map(s => `<span class="skill-badge-item">${s.name} ${s.level}%</span>`).join('');
            const currentTasksHtml = assignedTaskObjs.length > 0 
                ? assignedTaskObjs.map(t => `<div style="font-weight: 600; color: var(--text-primary); margin-top: 2px;">• ${t.title}</div>`).join('')
                : `<span style="color: var(--text-muted); font-style: italic;">No active tasks assigned</span>`;

            return `
                <div class="emp-card">
                    <div class="emp-card-header">
                        <div class="emp-card-user">
                            <div class="emp-avatar-lg">
                                ${emp.avatarInitials}
                                <span class="avatar-status ${emp.status === 'On Leave' ? 'status-leave' : (loadPct >= 85 ? 'status-busy' : 'status-online')}"></span>
                            </div>
                            <div class="emp-title-wrap">
                                <h3>${emp.name}</h3>
                                <p>${emp.role}</p>
                            </div>
                        </div>
                        <span class="pill-badge">${emp.status}</span>
                    </div>

                    <div>
                        <div class="workload-label-row">
                            <span>Capacity Load</span>
                            <strong>${loadPct}% (${emp.assignedHours}/${emp.maxHours}h)</strong>
                        </div>
                        <div class="workload-bar-lg">
                            <div class="fill" style="width: ${emp.status === 'On Leave' ? 0 : loadPct}%; background: ${loadPct > 85 ? 'var(--color-danger)' : 'var(--accent-secondary)'};"></div>
                        </div>
                    </div>

                    <div class="skills-badge-list">${skillsListHtml}</div>

                    <div class="emp-task-assigned-box">
                        <header>Active Tasks (${assignedTaskObjs.length})</header>
                        ${currentTasksHtml}
                    </div>

                    <div class="emp-card-actions">
                        <button class="btn btn-secondary btn-toggle-status" data-id="${emp.id}">
                            ${emp.status === 'On Leave' ? 'Mark Available' : 'Set On Leave'}
                        </button>
                        <button class="btn btn-primary btn-inspect-ai" data-id="${emp.id}">
                            AI Match Matrix
                        </button>
                    </div>
                </div>
            `;
        }).join('');

        document.querySelectorAll('.btn-toggle-status').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const empId = e.currentTarget.dataset.id;
                const emp = state.employees.find(x => x.id === empId);
                if (!emp) return;

                if (emp.status === 'On Leave') {
                    emp.status = 'Available';
                    logToTerminal(`[WORKFORCE] ${emp.name} returned from leave. Status: Available.`, 'success');
                } else {
                    emp.status = 'On Leave';
                    logToTerminal(`[WORKFORCE] ${emp.name} marked On Leave. Triggering auto-reassignment...`, 'warning');
                    
                    const tasksToReassign = [...emp.assignedTasks];
                    emp.assignedTasks = [];
                    emp.assignedHours = 0;

                    tasksToReassign.forEach(tid => {
                        const taskObj = state.tasks.find(t => t.id === tid);
                        if (taskObj) {
                            taskObj.status = 'unassigned';
                            taskObj.assignedEmployeeId = null;
                            autoAssignSingleTask(taskObj);
                        }
                    });
                }
                updateAllViews();
            });
        });

        document.querySelectorAll('.btn-inspect-ai').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const empId = e.currentTarget.dataset.id;
                const emp = state.employees.find(x => x.id === empId);
                if (emp) openXAIModalForEmployee(emp);
            });
        });
    }

    function renderKanbanPipeline() {
        const colUnassigned = document.getElementById('col-unassigned');
        const colReallocating = document.getElementById('col-reallocating');
        const colInProgress = document.getElementById('col-in-progress');
        const colCompleted = document.getElementById('col-completed');

        const unassignedTasks = state.tasks.filter(t => t.status === 'unassigned');
        const reallocatingTasks = state.tasks.filter(t => t.status === 'reallocating');
        const inProgressTasks = state.tasks.filter(t => t.status === 'in-progress');
        const completedTasks = state.tasks.filter(t => t.status === 'completed');

        document.getElementById('count-unassigned').innerText = unassignedTasks.length;
        document.getElementById('count-reallocating').innerText = reallocatingTasks.length;
        document.getElementById('count-in-progress').innerText = inProgressTasks.length;
        document.getElementById('count-completed').innerText = completedTasks.length;

        colUnassigned.innerHTML = renderKanbanCardGroup(unassignedTasks, true);
        colReallocating.innerHTML = renderKanbanCardGroup(reallocatingTasks, false);
        colInProgress.innerHTML = renderKanbanCardGroup(inProgressTasks, false);
        colCompleted.innerHTML = renderKanbanCardGroup(completedTasks, false);

        document.querySelectorAll('.btn-autoassign-task').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const taskId = e.currentTarget.dataset.id;
                const task = state.tasks.find(t => t.id === taskId);
                if (task) autoAssignSingleTask(task);
            });
        });

        document.querySelectorAll('.btn-complete-task').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const taskId = e.currentTarget.dataset.id;
                const task = state.tasks.find(t => t.id === taskId);
                if (task) {
                    task.status = 'completed';
                    if (task.assignedEmployeeId) {
                        const emp = state.employees.find(x => x.id === task.assignedEmployeeId);
                        if (emp) {
                            emp.assignedHours = Math.max(0, emp.assignedHours - 12);
                            emp.assignedTasks = emp.assignedTasks.filter(id => id !== taskId);
                        }
                    }
                    logToTerminal(`[TASK VERIFIED] '${task.title}' marked Completed.`, 'success');
                    updateAllViews();
                }
            });
        });
    }

    function renderKanbanCardGroup(taskList, showAutoAssignBtn) {
        if (taskList.length === 0) {
            return `<div style="text-align: center; color: var(--text-muted); padding: 12px; font-size: 0.75rem;">No tasks in column</div>`;
        }

        return taskList.map(task => {
            const assignee = state.employees.find(e => e.id === task.assignedEmployeeId);
            const priorityClass = task.priority.toLowerCase();

            return `
                <div class="kanban-card">
                    <div class="kanban-card-top">
                        <span class="badge-${priorityClass}">${task.priority}</span>
                        <span style="font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">SLA: ${task.slaHours}h</span>
                    </div>
                    <div class="kanban-card-title">${task.title}</div>
                    <div style="font-size: 0.72rem; color: var(--accent-secondary);">Required: ${task.requiredSkills.join(', ')}</div>
                    <div class="kanban-card-meta">
                        <span>Assignee:</span>
                        <strong>${assignee ? assignee.name : 'Unassigned'}</strong>
                    </div>
                    ${showAutoAssignBtn ? `
                        <div class="kanban-card-actions">
                            <button class="btn btn-primary btn-autoassign-task" data-id="${task.id}">⚡ Run AI Auto-Assign</button>
                        </div>
                    ` : (task.status === 'in-progress' ? `
                        <div class="kanban-card-actions">
                            <button class="btn btn-secondary btn-complete-task" data-id="${task.id}">✓ Complete Task</button>
                        </div>
                    ` : '')}
                </div>
            `;
        }).join('');
    }

    function autoAssignSingleTask(task) {
        logToTerminal(`[AI MATCHING] Computing optimal workforce vector for '${task.title}'...`, 'ai');
        
        const matches = findBestMatchesForTask(task);
        const bestMatch = matches.find(m => m.employee.status !== 'On Leave');

        if (bestMatch) {
            task.assignedEmployeeId = bestMatch.employee.id;
            task.status = 'in-progress';
            bestMatch.employee.assignedTasks.push(task.id);
            bestMatch.employee.assignedHours += 12;

            if (bestMatch.employee.assignedHours >= bestMatch.employee.maxHours * 0.8) {
                bestMatch.employee.status = 'Busy';
            }

            logToTerminal(`[AI MATCHED] Assigned '${task.title}' -> ${bestMatch.employee.name} (${bestMatch.match.totalScore}% Match Score).`, 'success');
            
            addXAITimelineItem(
                `Allocated '${task.title}' -> ${bestMatch.employee.name}`,
                `Skill match: ${bestMatch.match.skillScore}%, Remaining capacity: ${bestMatch.match.remainingCapacity}h. Zero bottleneck.`,
                'success'
            );
        } else {
            logToTerminal(`[WARNING] No eligible staff found for '${task.title}'.`, 'warning');
        }

        updateAllViews();
    }

    function renderSkillMatrix() {
        const matrixEl = document.getElementById('skill-matrix-grid');
        const skillCatalog = ['Python', 'Cloud Architecture', 'Kubernetes', 'Cyber Security', 'AI/ML', 'Frontend JS', 'UI/UX Design'];

        matrixEl.innerHTML = skillCatalog.map(skillName => {
            const qualifiedStaff = state.employees.filter(e => e.skills.some(s => s.name.toLowerCase() === skillName.toLowerCase() && e.status !== 'On Leave'));
            const avgSkillLevel = qualifiedStaff.length > 0 
                ? Math.round(qualifiedStaff.reduce((sum, e) => sum + (e.skills.find(s => s.name.toLowerCase() === skillName.toLowerCase())?.level || 0), 0) / qualifiedStaff.length)
                : 0;

            const activeDemandTasks = state.tasks.filter(t => t.requiredSkills.includes(skillName)).length;

            return `
                <div class="skill-matrix-box">
                    <h4>${skillName}</h4>
                    <div class="skill-matrix-stats">
                        <span>Qualified Staff:</span>
                        <strong style="color: #fff;">${qualifiedStaff.length} Staff</strong>
                    </div>
                    <div class="skill-matrix-stats">
                        <span>Avg Vector Level:</span>
                        <strong style="color: var(--color-success);">${avgSkillLevel}%</strong>
                    </div>
                    <div class="skill-matrix-stats">
                        <span>Active Demand:</span>
                        <strong style="color: var(--color-warning);">${activeDemandTasks} Tasks</strong>
                    </div>
                </div>
            `;
        }).join('');
    }

    function renderActivityFeed() {
        const feedEl = document.getElementById('activity-feed-list');
        const filtered = state.activityLogs.filter(log => {
            if (state.activityFilter === 'all') return true;
            return log.category === state.activityFilter;
        });

        feedEl.innerHTML = filtered.map(log => `
            <div class="activity-row">
                <div class="act-meta">
                    <span class="act-badge ${log.category}">${log.category}</span>
                    <div class="act-desc">
                        <strong>${log.title}</strong>
                        <p style="font-size: 0.78rem; color: var(--text-secondary);">${log.description}</p>
                    </div>
                </div>
                <span class="act-time">${log.time}</span>
            </div>
        `).join('');
    }

    function renderAnalyticsCharts() {
        const canvas1 = document.getElementById('chart-workload');
        if (canvas1 && canvas1.getContext) {
            const ctx = canvas1.getContext('2d');
            const rect = canvas1.parentNode.getBoundingClientRect();
            canvas1.width = rect.width || 500;
            canvas1.height = 240;

            ctx.clearRect(0, 0, canvas1.width, canvas1.height);

            const staffList = state.employees.filter(e => e.status !== 'On Leave');
            const barWidth = Math.min(36, (canvas1.width - 60) / staffList.length);
            const startX = 40;
            const maxY = 200;

            ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(startX, 10);
            ctx.lineTo(startX, maxY);
            ctx.lineTo(canvas1.width - 10, maxY);
            ctx.stroke();

            staffList.forEach((emp, i) => {
                const x = startX + i * (barWidth + 14) + 10;
                const pct = Math.min(100, Math.round((emp.assignedHours / emp.maxHours) * 100));
                const barHeight = (pct / 100) * (maxY - 30);
                const y = maxY - barHeight;

                const grad = ctx.createLinearGradient(0, y, 0, maxY);
                if (pct >= 85) {
                    grad.addColorStop(0, '#EF4444');
                    grad.addColorStop(1, '#DC2626');
                } else {
                    grad.addColorStop(0, '#6366F1');
                    grad.addColorStop(1, '#22D3EE');
                }

                ctx.fillStyle = grad;
                ctx.fillRect(x, y, barWidth, barHeight);

                ctx.fillStyle = '#94A3B8';
                ctx.font = '10px Outfit';
                ctx.fillText(emp.name.split(' ')[0], x, maxY + 15);
                
                ctx.fillStyle = '#FFF';
                ctx.font = 'bold 10px JetBrains Mono';
                ctx.fillText(`${pct}%`, x + 2, y - 5);
            });
        }

        const canvas2 = document.getElementById('chart-sla-mitigation');
        if (canvas2 && canvas2.getContext) {
            const ctx2 = canvas2.getContext('2d');
            const rect2 = canvas2.parentNode.getBoundingClientRect();
            canvas2.width = rect2.width || 500;
            canvas2.height = 240;

            ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

            const dataManual = [18, 22, 19, 25, 28, 30, 26];
            const dataWorkforceX = [18, 8, 4, 2, 1, 0, 1];
            const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

            const stepX = (canvas2.width - 60) / (labels.length - 1);
            const startX = 40;
            const maxY = 200;

            ctx2.strokeStyle = 'rgba(255, 255, 255, 0.1)';
            ctx2.beginPath();
            ctx2.moveTo(startX, 10);
            ctx2.lineTo(startX, maxY);
            ctx2.lineTo(canvas2.width - 10, maxY);
            ctx2.stroke();

            ctx2.strokeStyle = '#EF4444';
            ctx2.lineWidth = 2;
            ctx2.beginPath();
            dataManual.forEach((val, i) => {
                const x = startX + i * stepX;
                const y = maxY - (val / 35) * (maxY - 20);
                if (i === 0) ctx2.moveTo(x, y);
                else ctx2.lineTo(x, y);
            });
            ctx2.stroke();

            ctx2.strokeStyle = '#6366F1';
            ctx2.lineWidth = 3;
            ctx2.beginPath();
            dataWorkforceX.forEach((val, i) => {
                const x = startX + i * stepX;
                const y = maxY - (val / 35) * (maxY - 20);
                if (i === 0) ctx2.moveTo(x, y);
                else ctx2.lineTo(x, y);
            });
            ctx2.stroke();

            labels.forEach((lbl, i) => {
                const x = startX + i * stepX;
                ctx2.fillStyle = '#64748B';
                ctx2.font = '10px Outfit';
                ctx2.fillText(lbl, x - 10, maxY + 15);
            });

            ctx2.fillStyle = '#EF4444';
            ctx2.fillRect(canvas2.width - 160, 15, 10, 10);
            ctx2.fillStyle = '#94A3B8';
            ctx2.font = '11px Outfit';
            ctx2.fillText('Manual Allocations', canvas2.width - 145, 24);

            ctx2.fillStyle = '#6366F1';
            ctx2.fillRect(canvas2.width - 160, 35, 10, 10);
            ctx2.fillStyle = '#FFF';
            ctx2.fillText('WorkforceX AI Engine', canvas2.width - 145, 44);
        }
    }

    // 6. TERMINAL & XAI HELPERS
    function logToTerminal(message, type = 'system') {
        const feed = document.getElementById('terminal-feed');
        if (!feed) return;

        const timestamp = new Date().toTimeString().split(' ')[0];
        const logLine = document.createElement('div');
        logLine.className = `log-line ${type}`;
        logLine.innerText = `[${timestamp}] ${message}`;

        feed.appendChild(logLine);
        feed.scrollTop = feed.scrollHeight;
    }

    function addXAITimelineItem(title, description, type = 'info') {
        const timeline = document.getElementById('xai-realloc-timeline');
        if (!timeline) return;

        const timestamp = new Date().toTimeString().split(' ')[0];
        const item = document.createElement('div');
        item.className = `timeline-item ${type}`;
        item.innerHTML = `
            <span class="time-stamp">${timestamp}</span>
            <div class="timeline-body">
                <strong>${title}</strong>
                <p>${description}</p>
            </div>
        `;

        timeline.insertBefore(item, timeline.firstChild);
    }

    function addActivityLog(category, title, description) {
        const timestamp = new Date().toTimeString().split(' ')[0];
        state.activityLogs.unshift({
            id: `act-${Date.now()}`,
            type: category,
            time: timestamp,
            title,
            description,
            category
        });
        renderActivityFeed();
    }

    function openXAIModalForEmployee(employee) {
        const modal = document.getElementById('modal-xai-details');
        const content = document.getElementById('xai-modal-content');

        const activeTaskObjs = employee.assignedTasks.map(tid => state.tasks.find(t => t.id === tid)).filter(Boolean);

        content.innerHTML = `
            <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 20px;">
                <div class="emp-avatar-lg" style="width: 50px; height: 50px; font-size: 1.3rem;">${employee.avatarInitials}</div>
                <div>
                    <h3 style="font-size: 1.15rem; color: #fff;">${employee.name}</h3>
                    <p style="color: var(--accent-secondary); font-weight: 700; font-size: 0.85rem;">${employee.role} | Status: ${employee.status}</p>
                </div>
            </div>

            <h4 style="font-size: 0.9rem; margin-bottom: 10px; color: var(--text-primary);">Competency Vector Breakdown</h4>
            <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
                ${employee.skills.map(s => `
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.78rem; margin-bottom: 2px;">
                            <span>${s.name}</span>
                            <strong style="color: var(--accent-secondary);">${s.level}%</strong>
                        </div>
                        <div style="height: 4px; background: rgba(255,255,255,0.1); border-radius: 4px; overflow: hidden;">
                            <div style="width: ${s.level}%; height: 100%; background: var(--accent-primary);"></div>
                        </div>
                    </div>
                `).join('')}
            </div>

            <h4 style="font-size: 0.9rem; margin-bottom: 10px; color: var(--text-primary);">Assigned Deliverables (${activeTaskObjs.length})</h4>
            <div>
                ${activeTaskObjs.map(t => {
                    const match = calculateAIMatch(employee, t);
                    return `
                        <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-color); padding: 10px; border-radius: 8px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <strong style="color: #fff; font-size: 0.88rem;">${t.title}</strong>
                                <p style="font-size: 0.75rem; color: var(--text-secondary);">Required Skills: ${t.requiredSkills.join(', ')}</p>
                            </div>
                            <div style="text-align: right;">
                                <span style="font-size: 0.68rem; color: var(--text-muted);">Match Precision</span>
                                <div style="font-size: 1.1rem; font-weight: 800; color: var(--color-success);">${match.totalScore}%</div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        `;

        modal.classList.add('open');
    }

    // 7. ROUTING & EVENTS
    function switchTab(tabId) {
        document.querySelectorAll('.nav-link').forEach(tab => {
            if (tab.dataset.tab === tabId) tab.classList.add('active');
            else tab.classList.remove('active');
        });

        document.querySelectorAll('.tab-pane').forEach(pane => {
            if (pane.id === tabId) pane.classList.add('active');
            else pane.classList.remove('active');
        });

        if (tabId === 'tab-analytics') {
            setTimeout(renderAnalyticsCharts, 100);
        }
    }

    document.querySelectorAll('.nav-link').forEach(tab => {
        tab.addEventListener('click', (e) => {
            switchTab(e.currentTarget.dataset.tab);
        });
    });

    document.getElementById('btn-view-all-tasks')?.addEventListener('click', () => {
        switchTab('tab-tasks');
    });

    document.getElementById('btn-trigger-reallocate')?.addEventListener('click', () => {
        logToTerminal('[DEMO RUN] Auto-Reallocating all unassigned pipeline tasks...', 'ai');
        state.tasks.filter(t => t.status === 'unassigned').forEach(t => autoAssignSingleTask(t));
    });

    document.getElementById('btn-sim-absence')?.addEventListener('click', triggerAbsenceSimulation);
    document.getElementById('btn-sim-incident')?.addEventListener('click', triggerP0IncidentSimulation);

    document.getElementById('scen-absence')?.addEventListener('click', triggerAbsenceSimulation);
    document.getElementById('scen-p0')?.addEventListener('click', triggerP0IncidentSimulation);
    document.getElementById('scen-workload')?.addEventListener('click', triggerWorkloadBalancingSimulation);

    document.getElementById('btn-chaos-outage')?.addEventListener('click', triggerChaosOutage);
    document.getElementById('btn-chaos-spike')?.addEventListener('click', triggerChaosP0Spike);
    document.getElementById('btn-chaos-crunch')?.addEventListener('click', triggerChaosSLACrunch);
    document.getElementById('btn-chaos-reset')?.addEventListener('click', resetChaosSandbox);

    document.getElementById('btn-trigger-all-autoassign')?.addEventListener('click', () => {
        state.tasks.filter(t => t.status === 'unassigned').forEach(t => autoAssignSingleTask(t));
    });

    const searchInput = document.getElementById('global-search-input');
    const empSearchInput = document.getElementById('employee-search-input');

    document.addEventListener('keydown', (e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            searchInput.focus();
        } else if (e.key === '/' && document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            e.preventDefault();
            searchInput.focus();
        }
    });

    searchInput?.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (empSearchInput) empSearchInput.value = e.target.value;
        switchTab('tab-workforce');
        renderWorkforceGrid();
    });

    empSearchInput?.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        renderWorkforceGrid();
    });

    document.querySelectorAll('#skill-filter-pills .pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
            document.querySelectorAll('#skill-filter-pills .pill').forEach(p => p.classList.remove('active'));
            e.currentTarget.classList.add('active');
            state.activeFilter = e.currentTarget.dataset.filter;
            renderWorkforceGrid();
        });
    });

    document.querySelectorAll('#activity-filter-pills .pill').forEach(pill => {
        pill.addEventListener('click', (e) => {
            document.querySelectorAll('#activity-filter-pills .pill').forEach(p => p.classList.remove('active'));
            e.currentTarget.classList.add('active');
            state.activityFilter = e.currentTarget.dataset.actfilter;
            renderActivityFeed();
        });
    });

    function setupModal(openBtnId, modalId) {
        const btn = document.getElementById(openBtnId);
        const modal = document.getElementById(modalId);
        if (!btn || !modal) return;

        btn.addEventListener('click', () => modal.classList.add('open'));
    }

    setupModal('btn-open-add-task', 'modal-add-task');
    setupModal('btn-open-add-task-2', 'modal-add-task');
    setupModal('btn-open-add-emp', 'modal-add-emp');

    document.querySelectorAll('[modal-close]').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const backdrop = e.currentTarget.closest('.modal-backdrop');
            if (backdrop) backdrop.classList.remove('open');
        });
    });

    document.getElementById('form-add-task')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('task-title').value;
        const priority = document.getElementById('task-priority').value;
        const slaHours = parseInt(document.getElementById('task-sla').value, 10);

        const checkedSkills = Array.from(document.querySelectorAll('#task-skills-picker input:checked')).map(cb => cb.value);

        const newTask = {
            id: `task-${Date.now()}`,
            title,
            priority,
            slaHours: slaHours || 12,
            requiredSkills: checkedSkills.length > 0 ? checkedSkills : ['Python'],
            status: 'unassigned',
            assignedEmployeeId: null
        };

        state.tasks.unshift(newTask);
        logToTerminal(`[NEW TASK CREATED] '${title}'. Running AI Auto-Allocation...`, 'system');
        addActivityLog('reallocation', 'New Task Created', title);

        document.getElementById('modal-add-task').classList.remove('open');
        e.target.reset();

        autoAssignSingleTask(newTask);
    });

    document.getElementById('form-add-emp')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('emp-name').value;
        const role = document.getElementById('emp-role').value;
        const maxHours = parseInt(document.getElementById('emp-max-hours').value, 10) || 40;
        const skillStr = document.getElementById('emp-skills').value;

        const skillsArr = skillStr.split(',').map(s => {
            return { name: s.trim(), level: 88 };
        }).filter(s => s.name.length > 0);

        const initials = name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

        const newEmp = {
            id: `emp-${Date.now()}`,
            name,
            role,
            status: 'Available',
            maxHours,
            assignedHours: 0,
            skills: skillsArr.length > 0 ? skillsArr : [{ name: 'Python', level: 90 }],
            assignedTasks: [],
            avatarInitials: initials || 'WX'
        };

        state.employees.push(newEmp);
        logToTerminal(`[WORKFORCE ONBOARDED] ${name} (${role}) added to active workforce grid.`, 'success');
        addActivityLog('absence', 'Employee Onboarded', `${name} (${role})`);

        document.getElementById('modal-add-emp').classList.remove('open');
        e.target.reset();

        updateAllViews();
    });

    window.addEventListener('resize', () => {
        renderAnalyticsCharts();
    });

    updateAllViews();
    logToTerminal('[SYSTEM LOADED] WorkforceX AI Engine online. Ready for operations.', 'success');
});